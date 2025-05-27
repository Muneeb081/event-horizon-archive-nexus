
import React, { useState, useEffect } from 'react';
import { Bell, Calendar, Gem, Plus, Edit, Trash2, LogOut, Save, X, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AdminDashboardProps {
  onLogout: () => void;
}

interface Announcement {
  id: string;
  title: string;
  date: string;
  description: string;
}

interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  description: string;
}

interface Gemstone {
  id: string;
  name: string;
  image: string;
  price: string;
  category: string;
  description?: string;
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [activeTab, setActiveTab] = useState('announcements');
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();

  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [gemstones, setGemstones] = useState<Gemstone[]>([]);

  // Fetch data from Supabase
  const fetchAnnouncements = async () => {
    const { data, error } = await supabase.from('announcements').select('*').order('date', { ascending: false });
    if (error) {
      toast({ title: "Error", description: "Failed to fetch announcements", variant: "destructive" });
    } else {
      setAnnouncements(data || []);
    }
  };

  const fetchEvents = async () => {
    const { data, error } = await supabase.from('events').select('*').order('date', { ascending: false });
    if (error) {
      toast({ title: "Error", description: "Failed to fetch events", variant: "destructive" });
    } else {
      setEvents(data || []);
    }
  };

  const fetchGemstones = async () => {
    const { data, error } = await supabase.from('gemstones').select('*').order('created_at', { ascending: false });
    if (error) {
      toast({ title: "Error", description: "Failed to fetch gemstones", variant: "destructive" });
    } else {
      setGemstones(data || []);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
    fetchEvents();
    fetchGemstones();
  }, []);

  const handleEdit = (item: any, type: string) => {
    setEditingItem({ ...item, type });
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!editingItem) return;
    
    setLoading(true);
    try {
      if (editingItem.type === 'announcement') {
        if (editingItem.id) {
          const { error } = await supabase
            .from('announcements')
            .update({
              title: editingItem.title,
              description: editingItem.description,
              date: editingItem.date
            })
            .eq('id', editingItem.id);
          if (error) throw error;
        } else {
          const { error } = await supabase
            .from('announcements')
            .insert({
              title: editingItem.title,
              description: editingItem.description,
              date: editingItem.date
            });
          if (error) throw error;
        }
        await fetchAnnouncements();
      } else if (editingItem.type === 'event') {
        if (editingItem.id) {
          const { error } = await supabase
            .from('events')
            .update({
              name: editingItem.name,
              description: editingItem.description,
              date: editingItem.date,
              time: editingItem.time
            })
            .eq('id', editingItem.id);
          if (error) throw error;
        } else {
          const { error } = await supabase
            .from('events')
            .insert({
              name: editingItem.name,
              description: editingItem.description,
              date: editingItem.date,
              time: editingItem.time
            });
          if (error) throw error;
        }
        await fetchEvents();
      } else if (editingItem.type === 'gemstone') {
        if (editingItem.id) {
          const { error } = await supabase
            .from('gemstones')
            .update({
              name: editingItem.name,
              image: editingItem.image,
              price: editingItem.price,
              category: editingItem.category,
              description: editingItem.description
            })
            .eq('id', editingItem.id);
          if (error) throw error;
        } else {
          const { error } = await supabase
            .from('gemstones')
            .insert({
              name: editingItem.name,
              image: editingItem.image,
              price: editingItem.price,
              category: editingItem.category,
              description: editingItem.description
            });
          if (error) throw error;
        }
        await fetchGemstones();
      }
      
      toast({ title: "Success", description: "Item saved successfully" });
      setIsEditing(false);
      setEditingItem(null);
    } catch (error) {
      toast({ title: "Error", description: "Failed to save item", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, type: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    setLoading(true);
    try {
      if (type === 'announcement') {
        const { error } = await supabase.from('announcements').delete().eq('id', id);
        if (error) throw error;
        await fetchAnnouncements();
      } else if (type === 'event') {
        const { error } = await supabase.from('events').delete().eq('id', id);
        if (error) throw error;
        await fetchEvents();
      } else if (type === 'gemstone') {
        const { error } = await supabase.from('gemstones').delete().eq('id', id);
        if (error) throw error;
        await fetchGemstones();
      }
      
      toast({ title: "Success", description: "Item deleted successfully" });
    } catch (error) {
      toast({ title: "Error", description: "Failed to delete item", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = (type: string) => {
    if (type === 'announcement') {
      setEditingItem({ type, title: '', date: '', description: '' });
    } else if (type === 'event') {
      setEditingItem({ type, name: '', date: '', time: '', description: '' });
    } else if (type === 'gemstone') {
      setEditingItem({ type, name: '', image: '', price: '', category: '', description: '' });
    }
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-all duration-500">
      {/* Enhanced Header */}
      <header className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-xl border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Euro Vision 2000 Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="relative p-3 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 shadow-md"
                aria-label="Toggle theme"
              >
                <div className="relative w-6 h-6">
                  <Sun 
                    className={`absolute inset-0 w-6 h-6 text-gray-600 dark:text-gray-400 transition-all duration-300 ${
                      theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
                    }`} 
                  />
                  <Moon 
                    className={`absolute inset-0 w-6 h-6 text-gray-600 dark:text-gray-400 transition-all duration-300 ${
                      theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
                    }`} 
                  />
                </div>
              </button>
              <button
                onClick={onLogout}
                className="flex items-center space-x-3 px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Tab Navigation */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-3xl shadow-2xl mb-8 border border-slate-200/50 dark:border-slate-700/50">
          <div className="border-b border-slate-200/50 dark:border-slate-700/50">
            <nav className="flex space-x-8 px-8">
              {[
                { id: 'announcements', name: 'Announcements', icon: Bell, color: 'from-blue-500 to-blue-600' },
                { id: 'events', name: 'Events', icon: Calendar, color: 'from-green-500 to-green-600' },
                { id: 'gemstones', name: 'Gemstones', icon: Gem, color: 'from-purple-500 to-purple-600' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-3 py-6 px-2 border-b-3 font-semibold text-base transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'border-slate-700 dark:border-slate-300 text-slate-700 dark:text-slate-300'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:hover:text-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <tab.icon className="w-6 h-6" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Enhanced Content Area */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 capitalize">{activeTab}</h2>
              <button
                onClick={() => handleAdd(activeTab.slice(0, -1))}
                disabled={loading}
                className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold disabled:opacity-50"
              >
                <Plus className="w-5 h-5" />
                <span>Add New</span>
              </button>
            </div>

            {/* Announcements Tab */}
            {activeTab === 'announcements' && (
              <div className="grid gap-6">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="bg-gradient-to-r from-white to-blue-50 dark:from-slate-700 dark:to-slate-600 border border-slate-200 dark:border-slate-600 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-3 text-xl">{announcement.title}</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mb-4 font-medium">{announcement.date}</p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{announcement.description}</p>
                      </div>
                      <div className="flex space-x-3 ml-6">
                        <button
                          onClick={() => handleEdit(announcement, 'announcement')}
                          disabled={loading}
                          className="p-3 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(announcement.id, 'announcement')}
                          disabled={loading}
                          className="p-3 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Events Tab */}
            {activeTab === 'events' && (
              <div className="grid gap-6">
                {events.map((event) => (
                  <div key={event.id} className="bg-gradient-to-r from-white to-green-50 dark:from-slate-700 dark:to-slate-600 border border-slate-200 dark:border-slate-600 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-3 text-xl">{event.name}</h3>
                        <p className="text-sm text-green-600 dark:text-green-400 mb-4 font-medium">{event.date} at {event.time}</p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{event.description}</p>
                      </div>
                      <div className="flex space-x-3 ml-6">
                        <button
                          onClick={() => handleEdit(event, 'event')}
                          disabled={loading}
                          className="p-3 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(event.id, 'event')}
                          disabled={loading}
                          className="p-3 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Enhanced Gemstones Tab */}
            {activeTab === 'gemstones' && (
              <div className="grid gap-6">
                {gemstones.map((gemstone) => (
                  <div key={gemstone.id} className="bg-gradient-to-r from-white to-purple-50 dark:from-slate-700 dark:to-slate-600 border border-slate-200 dark:border-slate-600 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="flex justify-between items-start">
                      <div className="flex space-x-6 flex-1">
                        <img 
                          src={gemstone.image} 
                          alt={gemstone.name}
                          className="w-24 h-24 object-cover rounded-2xl shadow-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-3 text-xl">{gemstone.name}</h3>
                          <p className="text-sm text-purple-600 dark:text-purple-400 mb-2 font-medium">Price: {gemstone.price}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Category: {gemstone.category}</p>
                          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{gemstone.description}</p>
                        </div>
                      </div>
                      <div className="flex space-x-3 ml-6">
                        <button
                          onClick={() => handleEdit(gemstone, 'gemstone')}
                          disabled={loading}
                          className="p-3 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(gemstone.id, 'gemstone')}
                          disabled={loading}
                          className="p-3 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl max-w-lg w-full transform animate-scale-in border border-slate-200/50 dark:border-slate-700/50">
            <div className="flex justify-between items-center p-8 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                {editingItem?.id ? 'Edit' : 'Add'} {editingItem?.type}
              </h3>
              <button
                onClick={() => setIsEditing(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-300 p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-6 max-h-96 overflow-y-auto">
              {editingItem?.type === 'announcement' && (
                <>
                  <input
                    type="text"
                    placeholder="Title"
                    value={editingItem.title || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                    className="w-full px-4 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300 text-lg"
                  />
                  <input
                    type="date"
                    value={editingItem.date || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, date: e.target.value })}
                    className="w-full px-4 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300 text-lg"
                  />
                  <textarea
                    placeholder="Description"
                    value={editingItem.description || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300 text-lg"
                  />
                </>
              )}

              {editingItem?.type === 'event' && (
                <>
                  <input
                    type="text"
                    placeholder="Event Name"
                    value={editingItem.name || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                    className="w-full px-4 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300 text-lg"
                  />
                  <input
                    type="date"
                    value={editingItem.date || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, date: e.target.value })}
                    className="w-full px-4 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300 text-lg"
                  />
                  <input
                    type="time"
                    value={editingItem.time || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, time: e.target.value })}
                    className="w-full px-4 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300 text-lg"
                  />
                  <textarea
                    placeholder="Description"
                    value={editingItem.description || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300 text-lg"
                  />
                </>
              )}

              {editingItem?.type === 'gemstone' && (
                <>
                  <input
                    type="text"
                    placeholder="Gemstone Name"
                    value={editingItem.name || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                    className="w-full px-4 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300 text-lg"
                  />
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={editingItem.image || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
                    className="w-full px-4 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300 text-lg"
                  />
                  <input
                    type="text"
                    placeholder="Price (e.g., $5,000)"
                    value={editingItem.price || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, price: e.target.value })}
                    className="w-full px-4 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300 text-lg"
                  />
                  <select
                    value={editingItem.category || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                    className="w-full px-4 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300 text-lg"
                  >
                    <option value="">Select Category</option>
                    <option value="Precious">Precious</option>
                    <option value="Semi-Precious">Semi-Precious</option>
                    <option value="Rare">Rare</option>
                    <option value="Collectible">Collectible</option>
                  </select>
                  <textarea
                    placeholder="Description"
                    value={editingItem.description || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300 text-lg"
                  />
                </>
              )}
            </div>

            <div className="flex justify-end space-x-4 p-8 border-t border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setIsEditing(false)}
                className="px-8 py-4 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={loading}
                className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium disabled:opacity-50"
              >
                <Save className="w-5 h-5" />
                <span>{loading ? 'Saving...' : 'Save'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import { Bell, Calendar, Gem, Plus, Edit, Trash2, LogOut, Save, X, Upload, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface AdminDashboardProps {
  onLogout: () => void;
}

interface Announcement {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  description: string;
}

interface Gemstone {
  id: number;
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
  const { theme, toggleTheme } = useTheme();

  // Load data from localStorage or use defaults
  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    const saved = localStorage.getItem('admin-announcements');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: 'New Cultural Heritage Initiative', date: '2024-03-15', description: 'Announcing our new program for cultural preservation' },
      { id: 2, title: 'Partnership with International Museums', date: '2024-03-10', description: 'Strategic partnerships with leading cultural institutions' },
      { id: 3, title: 'Digital Archive Launch', date: '2024-03-20', description: 'Launch of our comprehensive digital heritage archive' }
    ];
  });

  const [events, setEvents] = useState<Event[]>(() => {
    const saved = localStorage.getItem('admin-events');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'European Cultural Summit 2024', date: '2024-04-15', time: '09:00', description: 'Annual summit bringing together cultural leaders from across Europe' },
      { id: 2, name: 'Heritage Documentation Workshop', date: '2024-05-22', time: '10:00', description: 'Professional workshop on modern documentation techniques' },
      { id: 3, name: 'International Trade Fair', date: '2024-06-10', time: '14:00', description: 'Showcasing European craftsmanship and cultural products' }
    ];
  });

  const [gemstones, setGemstones] = useState<Gemstone[]>(() => {
    const saved = localStorage.getItem('admin-gemstones');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'Royal Sapphire Collection', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', price: '$15,000', category: 'Precious', description: 'Exquisite royal blue sapphires from Kashmir' },
      { id: 2, name: 'Colombian Emerald Set', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400', price: '$8,000', category: 'Precious', description: 'Premium quality emeralds with exceptional clarity' },
      { id: 3, name: 'Pink Diamond Collection', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400', price: '$25,000', category: 'Rare', description: 'Rare pink diamonds with certified authenticity' },
      { id: 4, name: 'Tanzanite Crystal', image: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=400', price: '$3,500', category: 'Semi-Precious', description: 'Beautiful blue-purple tanzanite crystals' }
    ];
  });

  // Save data to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('admin-announcements', JSON.stringify(announcements));
    localStorage.setItem('admin-events', JSON.stringify(events));
    localStorage.setItem('admin-gemstones', JSON.stringify(gemstones));
    
    // Trigger a custom event to notify main website of data changes
    window.dispatchEvent(new CustomEvent('adminDataUpdate', {
      detail: { announcements, events, gemstones }
    }));
  }, [announcements, events, gemstones]);

  const handleEdit = (item: any, type: string) => {
    setEditingItem({ ...item, type });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editingItem) {
      if (editingItem.type === 'announcement') {
        if (editingItem.id) {
          setAnnouncements(prev => prev.map(item => item.id === editingItem.id ? editingItem : item));
        } else {
          setAnnouncements(prev => [...prev, { ...editingItem, id: Date.now() }]);
        }
      } else if (editingItem.type === 'event') {
        if (editingItem.id) {
          setEvents(prev => prev.map(item => item.id === editingItem.id ? editingItem : item));
        } else {
          setEvents(prev => [...prev, { ...editingItem, id: Date.now() }]);
        }
      } else if (editingItem.type === 'gemstone') {
        if (editingItem.id) {
          setGemstones(prev => prev.map(item => item.id === editingItem.id ? editingItem : item));
        } else {
          setGemstones(prev => [...prev, { ...editingItem, id: Date.now() }]);
        }
      }
    }
    setIsEditing(false);
    setEditingItem(null);
  };

  const handleDelete = (id: number, type: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      if (type === 'announcement') {
        setAnnouncements(prev => prev.filter(item => item.id !== id));
      } else if (type === 'event') {
        setEvents(prev => prev.filter(item => item.id !== id));
      } else if (type === 'gemstone') {
        setGemstones(prev => prev.filter(item => item.id !== id));
      }
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
      <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
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
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Tab Navigation */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-xl mb-8 border border-slate-200/50 dark:border-slate-700/50">
          <div className="border-b border-slate-200/50 dark:border-slate-700/50">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'announcements', name: 'Announcements', icon: Bell, color: 'from-blue-500 to-blue-600' },
                { id: 'events', name: 'Events', icon: Calendar, color: 'from-green-500 to-green-600' },
                { id: 'gemstones', name: 'Gemstones', icon: Gem, color: 'from-purple-500 to-purple-600' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'border-slate-700 dark:border-slate-300 text-slate-700 dark:text-slate-300'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:hover:text-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Enhanced Content Area */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 capitalize">{activeTab}</h2>
              <button
                onClick={() => handleAdd(activeTab.slice(0, -1))}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Add New</span>
              </button>
            </div>

            {/* Announcements Tab */}
            {activeTab === 'announcements' && (
              <div className="grid gap-6">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="bg-gradient-to-r from-white to-blue-50 dark:from-slate-700 dark:to-slate-600 border border-slate-200 dark:border-slate-600 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-2 text-lg">{announcement.title}</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mb-3 font-medium">{announcement.date}</p>
                        <p className="text-slate-700 dark:text-slate-300">{announcement.description}</p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button
                          onClick={() => handleEdit(announcement, 'announcement')}
                          className="p-3 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-all duration-300 transform hover:scale-110"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(announcement.id, 'announcement')}
                          className="p-3 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-xl transition-all duration-300 transform hover:scale-110"
                        >
                          <Trash2 className="w-4 h-4" />
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
                  <div key={event.id} className="bg-gradient-to-r from-white to-green-50 dark:from-slate-700 dark:to-slate-600 border border-slate-200 dark:border-slate-600 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-2 text-lg">{event.name}</h3>
                        <p className="text-sm text-green-600 dark:text-green-400 mb-3 font-medium">{event.date} at {event.time}</p>
                        <p className="text-slate-700 dark:text-slate-300">{event.description}</p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button
                          onClick={() => handleEdit(event, 'event')}
                          className="p-3 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-all duration-300 transform hover:scale-110"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(event.id, 'event')}
                          className="p-3 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-xl transition-all duration-300 transform hover:scale-110"
                        >
                          <Trash2 className="w-4 h-4" />
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
                  <div key={gemstone.id} className="bg-gradient-to-r from-white to-purple-50 dark:from-slate-700 dark:to-slate-600 border border-slate-200 dark:border-slate-600 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="flex justify-between items-start">
                      <div className="flex space-x-4 flex-1">
                        <img 
                          src={gemstone.image} 
                          alt={gemstone.name}
                          className="w-20 h-20 object-cover rounded-xl shadow-md"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-2 text-lg">{gemstone.name}</h3>
                          <p className="text-sm text-purple-600 dark:text-purple-400 mb-1 font-medium">Price: {gemstone.price}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Category: {gemstone.category}</p>
                          <p className="text-slate-700 dark:text-slate-300 text-sm">{gemstone.description}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button
                          onClick={() => handleEdit(gemstone, 'gemstone')}
                          className="p-3 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-all duration-300 transform hover:scale-110"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(gemstone.id, 'gemstone')}
                          className="p-3 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-xl transition-all duration-300 transform hover:scale-110"
                        >
                          <Trash2 className="w-4 h-4" />
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full transform animate-scale-in border border-slate-200/50 dark:border-slate-700/50">
            <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                {editingItem?.id ? 'Edit' : 'Add'} {editingItem?.type}
              </h3>
              <button
                onClick={() => setIsEditing(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-300 p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
              {editingItem?.type === 'announcement' && (
                <>
                  <input
                    type="text"
                    placeholder="Title"
                    value={editingItem.title || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300"
                  />
                  <input
                    type="date"
                    value={editingItem.date || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, date: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300"
                  />
                  <textarea
                    placeholder="Description"
                    value={editingItem.description || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300"
                  />
                  <input
                    type="date"
                    value={editingItem.date || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, date: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300"
                  />
                  <input
                    type="time"
                    value={editingItem.time || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, time: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300"
                  />
                  <textarea
                    placeholder="Description"
                    value={editingItem.description || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={editingItem.image || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Price (e.g., $5,000)"
                    value={editingItem.price || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, price: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300"
                  />
                  <select
                    value={editingItem.category || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300"
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
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-700 dark:text-slate-100 transition-all duration-300"
                  />
                </>
              )}
            </div>

            <div className="flex justify-end space-x-4 p-6 border-t border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-3 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

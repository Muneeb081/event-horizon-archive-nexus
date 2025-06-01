
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, LogOut, Calendar, Bell, Gem, Image } from 'lucide-react';

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
  category: string;
  price: string;
  image: string;
  description?: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

type FormData = {
  title?: string;
  name?: string;
  date: string;
  time?: string;
  description: string;
  category?: string;
  price?: string;
  image?: string;
};

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<'announcements' | 'events' | 'gemstones'>('announcements');
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [gemstones, setGemstones] = useState<Gemstone[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    date: '',
    description: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [announcementsRes, eventsRes, gemstonesRes] = await Promise.all([
        supabase.from('announcements').select('*').order('created_at', { ascending: false }),
        supabase.from('events').select('*').order('created_at', { ascending: false }),
        supabase.from('gemstones').select('*').order('created_at', { ascending: false })
      ]);

      setAnnouncements(announcementsRes.data || []);
      setEvents(eventsRes.data || []);
      setGemstones(gemstonesRes.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      date: '',
      description: '',
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let result;
      
      if (activeTab === 'announcements') {
        const announcementData = {
          title: formData.title || '',
          date: formData.date,
          description: formData.description,
        };

        if (editingId) {
          result = await supabase
            .from('announcements')
            .update(announcementData)
            .eq('id', editingId);
        } else {
          result = await supabase
            .from('announcements')
            .insert([announcementData]);
        }
      } else if (activeTab === 'events') {
        const eventData = {
          name: formData.name || '',
          date: formData.date,
          time: formData.time || '',
          description: formData.description,
        };

        if (editingId) {
          result = await supabase
            .from('events')
            .update(eventData)
            .eq('id', editingId);
        } else {
          result = await supabase
            .from('events')
            .insert([eventData]);
        }
      } else if (activeTab === 'gemstones') {
        const gemstoneData = {
          name: formData.name || '',
          category: formData.category || '',
          price: formData.price || '',
          image: formData.image || '',
          description: formData.description,
        };

        if (editingId) {
          result = await supabase
            .from('gemstones')
            .update(gemstoneData)
            .eq('id', editingId);
        } else {
          result = await supabase
            .from('gemstones')
            .insert([gemstoneData]);
        }
      }

      if (result?.error) {
        throw result.error;
      }

      resetForm();
      fetchData();
    } catch (error) {
      console.error('Error saving item:', error);
      alert('Failed to save item. Please try again.');
    }
  };

  const handleEdit = (item: Announcement | Event | Gemstone) => {
    if (activeTab === 'announcements') {
      const announcement = item as Announcement;
      setFormData({
        title: announcement.title,
        date: announcement.date,
        description: announcement.description,
      });
    } else if (activeTab === 'events') {
      const event = item as Event;
      setFormData({
        name: event.name,
        date: event.date,
        time: event.time,
        description: event.description,
      });
    } else if (activeTab === 'gemstones') {
      const gemstone = item as Gemstone;
      setFormData({
        name: gemstone.name,
        category: gemstone.category,
        price: gemstone.price,
        image: gemstone.image,
        description: gemstone.description || '',
        date: '',
      });
    }
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      let result;
      if (activeTab === 'announcements') {
        result = await supabase.from('announcements').delete().eq('id', id);
      } else if (activeTab === 'events') {
        result = await supabase.from('events').delete().eq('id', id);
      } else if (activeTab === 'gemstones') {
        result = await supabase.from('gemstones').delete().eq('id', id);
      }

      if (result?.error) {
        throw result.error;
      }

      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Failed to delete item. Please try again.');
    }
  };

  const renderForm = () => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        {editingId ? 'Edit' : 'Add'} {activeTab.slice(0, -1)}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {(activeTab === 'announcements' || activeTab === 'events' || activeTab === 'gemstones') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {activeTab === 'announcements' ? 'Title' : 'Name'}
            </label>
            <input
              type="text"
              value={activeTab === 'announcements' ? formData.title || '' : formData.name || ''}
              onChange={(e) => setFormData({
                ...formData,
                [activeTab === 'announcements' ? 'title' : 'name']: e.target.value
              })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
              required
            />
          </div>
        )}

        {activeTab !== 'gemstones' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Date
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
              required
            />
          </div>
        )}

        {activeTab === 'events' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Time
            </label>
            <input
              type="time"
              value={formData.time || ''}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
              required
            />
          </div>
        )}

        {activeTab === 'gemstones' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Category
              </label>
              <input
                type="text"
                value={formData.category || ''}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Price
              </label>
              <input
                type="text"
                value={formData.price || ''}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <Image className="w-4 h-4 inline mr-1" />
                Image URL
              </label>
              <input
                type="url"
                value={formData.image || ''}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                placeholder="https://example.com/image.jpg"
                required
              />
              {formData.image && (
                <div className="mt-2">
                  <img 
                    src={formData.image} 
                    alt="Preview" 
                    className="w-32 h-32 object-cover rounded-md border border-gray-300 dark:border-gray-600"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"%3E%3Crect width="128" height="128" fill="%23f0f0f0"/%3E%3Ctext x="64" y="64" text-anchor="middle" dy=".3em" font-family="Arial, sans-serif" font-size="12" fill="%23999"%3EInvalid Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              )}
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            rows={4}
            required
          />
        </div>

        <div className="flex space-x-2">
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            {editingId ? 'Update' : 'Create'}
          </Button>
          <Button type="button" variant="outline" onClick={resetForm}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );

  const renderList = () => {
    let items: (Announcement | Event | Gemstone)[] = [];
    
    if (activeTab === 'announcements') {
      items = announcements;
    } else if (activeTab === 'events') {
      items = events;
    } else if (activeTab === 'gemstones') {
      items = gemstones;
    }

    if (items.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No {activeTab} found. Create your first one!
        </div>
      );
    }

    return (
      <div className="grid gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                  {activeTab === 'announcements' ? (item as Announcement).title :
                   activeTab === 'events' ? (item as Event).name :
                   (item as Gemstone).name}
                </h4>
                {activeTab !== 'gemstones' && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {activeTab === 'announcements' ? 
                      new Date((item as Announcement).date).toLocaleDateString() :
                      `${new Date((item as Event).date).toLocaleDateString()} at ${(item as Event).time}`
                    }
                  </p>
                )}
                {activeTab === 'gemstones' && (
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {(item as Gemstone).category}
                    </span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {(item as Gemstone).price}
                    </span>
                    {(item as Gemstone).image && (
                      <img 
                        src={(item as Gemstone).image} 
                        alt={(item as Gemstone).name}
                        className="w-12 h-12 object-cover rounded"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"%3E%3Crect width="48" height="48" fill="%23f0f0f0"/%3E%3Ctext x="24" y="24" text-anchor="middle" dy=".3em" font-family="Arial, sans-serif" font-size="8" fill="%23999"%3ENo Image%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    )}
                  </div>
                )}
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  {item.description}
                </p>
              </div>
              <div className="flex space-x-2 ml-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEdit(item)}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Admin Dashboard
            </h1>
            <Button onClick={onLogout} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {[
                { key: 'announcements', label: 'Announcements', icon: Bell },
                { key: 'events', label: 'Events', icon: Calendar },
                { key: 'gemstones', label: 'Gemstones', icon: Gem },
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`group inline-flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === key
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 capitalize">
              {activeTab}
            </h2>
            <Button onClick={() => setShowForm(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add {activeTab.slice(0, -1)}
            </Button>
          </div>

          {showForm && renderForm()}
          {renderList()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;


import React, { useState } from 'react';
import { Bell, Calendar, Gem, Plus, Edit, Trash2, LogOut, Save, X } from 'lucide-react';

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
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [activeTab, setActiveTab] = useState('announcements');
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Sample data
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    { id: 1, title: 'New Cultural Heritage Initiative', date: '2024-03-15', description: 'Announcing our new program' },
    { id: 2, title: 'Partnership with Museums', date: '2024-03-10', description: 'Strategic partnerships announced' }
  ]);

  const [events, setEvents] = useState<Event[]>([
    { id: 1, name: 'European Cultural Summit', date: '2024-04-15', time: '09:00', description: 'Annual summit event' },
    { id: 2, name: 'Heritage Workshop', date: '2024-05-22', time: '10:00', description: 'Documentation workshop' }
  ]);

  const [gemstones, setGemstones] = useState<Gemstone[]>([
    { id: 1, name: 'Royal Sapphire', image: 'sapphire.jpg', price: '$15,000', category: 'Precious' },
    { id: 2, name: 'Colombian Emerald', image: 'emerald.jpg', price: '$8,000', category: 'Precious' }
  ]);

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
    if (type === 'announcement') {
      setAnnouncements(prev => prev.filter(item => item.id !== id));
    } else if (type === 'event') {
      setEvents(prev => prev.filter(item => item.id !== id));
    } else if (type === 'gemstone') {
      setGemstones(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleAdd = (type: string) => {
    if (type === 'announcement') {
      setEditingItem({ type, title: '', date: '', description: '' });
    } else if (type === 'event') {
      setEditingItem({ type, name: '', date: '', time: '', description: '' });
    } else if (type === 'gemstone') {
      setEditingItem({ type, name: '', image: '', price: '', category: '' });
    }
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'announcements', name: 'Announcements', icon: Bell },
                { id: 'events', name: 'Events', icon: Calendar },
                { id: 'gemstones', name: 'Gemstones', icon: Gem }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                    activeTab === tab.id
                      ? 'border-gray-700 text-gray-700'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800 capitalize">{activeTab}</h2>
              <button
                onClick={() => handleAdd(activeTab.slice(0, -1))}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                <Plus className="w-4 h-4" />
                <span>Add New</span>
              </button>
            </div>

            {/* Announcements Tab */}
            {activeTab === 'announcements' && (
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">{announcement.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{announcement.date}</p>
                        <p className="text-gray-700">{announcement.description}</p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button
                          onClick={() => handleEdit(announcement, 'announcement')}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(announcement.id, 'announcement')}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-300"
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
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">{event.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">{event.date} at {event.time}</p>
                        <p className="text-gray-700">{event.description}</p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button
                          onClick={() => handleEdit(event, 'event')}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(event.id, 'event')}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Gemstones Tab */}
            {activeTab === 'gemstones' && (
              <div className="space-y-4">
                {gemstones.map((gemstone) => (
                  <div key={gemstone.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">{gemstone.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">Image: {gemstone.image}</p>
                        <p className="text-sm text-gray-600 mb-1">Price: {gemstone.price}</p>
                        <p className="text-gray-700">Category: {gemstone.category}</p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button
                          onClick={() => handleEdit(gemstone, 'gemstone')}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(gemstone.id, 'gemstone')}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-300"
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

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                {editingItem?.id ? 'Edit' : 'Add'} {editingItem?.type}
              </h3>
              <button
                onClick={() => setIsEditing(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {editingItem?.type === 'announcement' && (
                <>
                  <input
                    type="text"
                    placeholder="Title"
                    value={editingItem.title || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                  <input
                    type="date"
                    value={editingItem.date || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, date: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Description"
                    value={editingItem.description || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                  <input
                    type="date"
                    value={editingItem.date || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, date: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                  <input
                    type="time"
                    value={editingItem.time || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, time: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Description"
                    value={editingItem.description || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={editingItem.image || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Price"
                    value={editingItem.price || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, price: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Category"
                    value={editingItem.category || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </>
              )}
            </div>

            <div className="flex justify-end space-x-4 p-6 border-t border-gray-200">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
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

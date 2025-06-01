
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, MessageCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Comment {
  id: string;
  name: string;
  email: string;
  comment: string;
  created_at: string;
}

interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  image?: string;
}

const EventDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [event, setEvent] = useState<Event | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    saveInfo: false
  });

  useEffect(() => {
    fetchEvent();
    fetchComments();
  }, [id]);

  const fetchEvent = async () => {
    if (!id) return;
    
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .single();
      
    if (error) {
      console.error('Error fetching event:', error);
      toast({ title: "Error", description: "Failed to load event", variant: "destructive" });
    } else {
      setEvent(data);
    }
    setLoading(false);
  };

  const fetchComments = async () => {
    if (!id) return;
    
    const { data, error } = await supabase
      .from('event_comments')
      .select('*')
      .eq('event_id', id)
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Error fetching comments:', error);
    } else {
      setComments(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.comment) {
      toast({ title: "Error", description: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('event_comments')
        .insert({
          event_id: id,
          name: formData.name,
          email: formData.email,
          comment: formData.comment
        });

      if (error) throw error;

      toast({ title: "Success", description: "Comment submitted successfully!" });
      setFormData({ name: '', email: '', comment: '', saveInfo: false });
      fetchComments();
    } catch (error) {
      console.error('Error submitting comment:', error);
      toast({ title: "Error", description: "Failed to submit comment", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Event not found</h1>
          <Link to="/" className="text-green-600 hover:text-green-800 dark:text-green-400">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-green-600 hover:text-green-800 dark:text-green-400 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>

        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-12">
          {event.image && (
            <img 
              src={event.image} 
              alt={event.name}
              className="w-full h-64 md:h-96 object-cover"
            />
          )}
          
          <div className="p-8">
            <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              {event.name}
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        </article>

        {/* Comments Section - same as AnnouncementDetail but for events */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 flex items-center space-x-2">
            <MessageCircle className="w-6 h-6" />
            <span>Comments ({comments.length})</span>
          </h2>

          {/* Comment Form */}
          <form onSubmit={handleSubmit} className="mb-12 space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Submit a Comment</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition-all duration-300"
                required
              />
              <input
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition-all duration-300"
                required
              />
            </div>
            
            <textarea
              placeholder="Comment *"
              rows={6}
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition-all duration-300"
              required
            />
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="saveInfo"
                checked={formData.saveInfo}
                onChange={(e) => setFormData({ ...formData, saveInfo: e.target.checked })}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="saveInfo" className="text-gray-600 dark:text-gray-400">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>
            
            <button
              type="submit"
              disabled={submitting}
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium disabled:opacity-50"
            >
              {submitting ? 'Submitting...' : 'Post Comment'}
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">{comment.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(comment.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed ml-10">
                  {comment.comment}
                </p>
              </div>
            ))}
            
            {comments.length === 0 && (
              <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                No comments yet. Be the first to comment!
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventDetail;

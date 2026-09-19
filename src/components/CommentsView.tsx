import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CommentItem } from '../types';
import { 
  MessageSquare, 
  Star, 
  Send, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Filter, 
  ShieldCheck, 
  MapPin,
  SmilePlus
} from 'lucide-react';

const INITIAL_COMMENTS: CommentItem[] = [
  {
    id: 'c1',
    author: 'Aminata Diallo',
    prefecture: 'Préfecture de Bobigny (93)',
    statusBadge: 'Naturalisation obtenue 🇫🇷',
    rating: 5,
    content: 'J\'ai passé mon entretien la semaine dernière et j\'ai été interrogée sur la loi de 1905, Simone Veil et la devise républicaine. Le simulateur de 40 questions m\'a donné une confiance absolue ! Un grand merci pour cet outil gratuit et complet.',
    date: 'Il y a 2 jours',
    likes: 34,
    liked: false
  },
  {
    id: 'c2',
    author: 'Marco Rossi',
    prefecture: 'Préfecture du Rhône (Lyon)',
    statusBadge: 'Examen réussi (37/40) 🎯',
    rating: 5,
    content: 'Le seuil de 32/40 demande de la rigueur mais avec les quiz thématiques et les flashcards, tout s\'assimile naturellement. Faites particulièrement attention aux rôles respectifs du Président et du Premier ministre, l\'agent m\'a posé exactement cette question !',
    date: 'Il y a 4 jours',
    likes: 21,
    liked: false
  },
  {
    id: 'c3',
    author: 'Youssef B.',
    prefecture: 'Préfecture de Police de Paris (75)',
    statusBadge: 'Entretien passé ⏳',
    rating: 5,
    content: 'Très bonne application moderne et intuitive. La section sur les pièges à éviter lors de l\'entretien oral m\'a sauvé sur la question « Pourquoi devenir Français ». Entretien passé hier dans d\'excellentes conditions.',
    date: 'Il y a 1 semaine',
    likes: 18,
    liked: false
  },
  {
    id: 'c4',
    author: 'Elena Petrova',
    prefecture: 'Préfecture de Haute-Garonne (Toulouse)',
    statusBadge: 'En préparation 📚',
    rating: 5,
    content: 'L\'interface est superbe et les explications sous chaque question permettent de comprendre le pourquoi au lieu de juste mémoriser bêtement. Je fais deux examens blancs de 40 questions chaque soir.',
    date: 'Il y a 2 semaines',
    likes: 12,
    liked: false
  }
];

export const CommentsView: React.FC = () => {
  const [comments, setComments] = useState<CommentItem[]>(() => {
    try {
      const saved = localStorage.getItem('civic_user_comments');
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_COMMENTS;
      }
    } catch {
      // fallback
    }
    return INITIAL_COMMENTS;
  });

  // Form State
  const [author, setAuthor] = useState('');
  const [prefecture, setPrefecture] = useState('');
  const [statusBadge, setStatusBadge] = useState('Examen réussi (32+/40) 🎯');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [content, setContent] = useState('');
  const [filter, setFilter] = useState<'all' | 'reussi' | 'naturalise' | 'entretien'>('all');
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('civic_user_comments', JSON.stringify(comments));
    } catch {
      // Ignore
    }
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    const newComment: CommentItem = {
      id: 'c_' + Date.now(),
      author: author.trim(),
      prefecture: prefecture.trim() || 'Candidat citoyen',
      statusBadge: statusBadge,
      rating: rating,
      content: content.trim(),
      date: 'À l\'instant',
      likes: 1,
      liked: true
    };

    setComments(prev => [newComment, ...prev]);
    setAuthor('');
    setPrefecture('');
    setContent('');
    setRating(5);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 4000);
  };

  const handleToggleLike = (id: string) => {
    setComments(prev => prev.map(c => {
      if (c.id === id) {
        const isLiked = !c.liked;
        return {
          ...c,
          liked: isLiked,
          likes: isLiked ? c.likes + 1 : Math.max(0, c.likes - 1)
        };
      }
      return c;
    }));
  };

  const filteredComments = comments.filter(c => {
    if (filter === 'reussi') return c.statusBadge.includes('réussi');
    if (filter === 'naturalise') return c.statusBadge.includes('Naturalisation');
    if (filter === 'entretien') return c.statusBadge.includes('Entretien');
    return true;
  });

  const avgRating = comments.length > 0 
    ? (comments.reduce((acc, c) => acc + c.rating, 0) / comments.length).toFixed(1)
    : '5.0';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="max-w-5xl mx-auto py-8 px-4 space-y-8"
    >
      {/* Hero Banner with French Flag Glassmorphism */}
      <div className="relative overflow-hidden rounded-3xl flag-glass-card text-white p-6 sm:p-10 shadow-2xl">
        {/* French Flag Ambient Glass Glows: Blue on left, White in center, Red on right */}
        <div className="absolute -left-12 -top-12 w-80 h-80 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-72 h-72 bg-white/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-rose-600/25 rounded-full blur-3xl pointer-events-none" />
        
        {/* Tricolor glass top accent bar */}
        <div className="absolute top-0 inset-x-0 h-1 flex pointer-events-none">
          <div className="w-1/3 bg-blue-500/80 shadow-xs" />
          <div className="w-1/3 bg-white/90 shadow-xs" />
          <div className="w-1/3 bg-rose-500/80 shadow-xs" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3.5 max-w-xl">
            {/* French Flag Glass Emblem Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/25 backdrop-blur-md shadow-inner">
              <span className="flex h-3.5 w-5 rounded-xs overflow-hidden border border-white/40 shadow-xs">
                <span className="w-1/3 bg-blue-600" />
                <span className="w-1/3 bg-white" />
                <span className="w-1/3 bg-rose-600" />
              </span>
              <span>Espace Témoignages & Entraide Communautaire</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight drop-shadow-xs">
              Avis, Conseils & Retours d'Expérience
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Partagez vos impressions, les questions qui vous ont été posées en préfecture, vos astuces de révision ou laissez simplement un mot d'encouragement aux futurs citoyens !
            </p>
          </div>

          {/* Aggregate Rating Badge with Glass Effect */}
          <div className="flex sm:flex-col items-center sm:items-end justify-between bg-white/10 backdrop-blur-xl border border-white/25 p-5 rounded-2xl shrink-0 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-3xl sm:text-4xl font-black text-white">{avgRating}</span>
              <div className="flex flex-col">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-300 font-medium mt-0.5">Sur 5 étoiles</span>
              </div>
            </div>
            <div className="text-xs text-white/90 mt-2 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {comments.length} retours de candidats
            </div>
          </div>
        </div>

        {/* Tricolor glass bottom accent bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 flex pointer-events-none">
          <div className="w-1/3 bg-blue-500/80 shadow-xs" />
          <div className="w-1/3 bg-white/90 shadow-xs" />
          <div className="w-1/3 bg-rose-500/80 shadow-xs" />
        </div>
      </div>

      {/* Main Grid: Form on Left/Top, Comments on Right/Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Comment Form (5 columns on large screen) */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 space-y-5 sticky top-24">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <SmilePlus className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Laisser un commentaire</h2>
              <p className="text-xs text-slate-500">Votre avis aide les autres candidats à réussir.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Author Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Votre Prénom / Nom / Pseudo <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={author}
                onChange={e => setAuthor(e.target.value)}
                placeholder="Ex: Sarah M., Mehdi, Lucas..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Prefecture or City */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Préfecture ou Département (optionnel)
              </label>
              <input
                type="text"
                value={prefecture}
                onChange={e => setPrefecture(e.target.value)}
                placeholder="Ex: Préfecture du Rhône, Bobigny, Paris (75)..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Status Badge Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Votre Statut
              </label>
              <select
                value={statusBadge}
                onChange={e => setStatusBadge(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
              >
                <option value="Examen réussi (32+/40) 🎯">Examen réussi (32+/40) 🎯</option>
                <option value="Naturalisation obtenue 🇫🇷">Naturalisation obtenue 🇫🇷</option>
                <option value="Entretien passé ⏳">Entretien passé en attente ⏳</option>
                <option value="En préparation 📚">En préparation 📚</option>
                <option value="Candidat citoyen 🌟">Candidat citoyen 🌟</option>
              </select>
            </div>

            {/* Rating Stars */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Votre Note Globale : {rating} / 5
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 text-slate-300 hover:scale-110 transition-transform focus:outline-hidden"
                  >
                    <Star
                      className={`w-6 h-6 transition-colors ${
                        (hoverRating || rating) >= star
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Comment Body */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Votre Message / Retour d'expérience <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Partagez vos conseils, les questions posées lors de votre passage, votre score au simulateur..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all placeholder:text-slate-400 resize-y"
              />
            </div>

            {/* Submit button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full relative overflow-hidden flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-linear-to-r from-blue-700 via-slate-900 to-rose-700 hover:from-blue-600 hover:to-rose-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer border border-white/20"
            >
              <Send className="w-4 h-4" />
              Publier mon commentaire
            </motion.button>
          </form>

          {/* Success Toast */}
          <AnimatePresence>
            {showSuccessToast && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="p-3.5 rounded-xl bg-emerald-50/90 backdrop-blur-md border border-emerald-200 text-emerald-800 flex items-center gap-2.5 text-xs font-medium shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Merci ! Votre témoignage a été publié avec succès.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Comments Feed (7 columns on large screen) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Filter Pills with Glass Effect */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-white/60 shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 pl-1">
              <Filter className="w-3.5 h-3.5" />
              Filtrer :
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'Tous' },
                { id: 'reussi', label: 'Examen réussi' },
                { id: 'naturalise', label: 'Naturalisé(e)' },
                { id: 'entretien', label: 'Entretien passé' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    filter === tab.id
                      ? 'bg-linear-to-r from-blue-700 to-rose-700 text-white shadow-2xs'
                      : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredComments.map((item, index) => {
                const initials = item.author
                  .split(' ')
                  .map(p => p[0])
                  .slice(0, 2)
                  .join('')
                  .toUpperCase() || 'FR';

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    className="bg-white/85 backdrop-blur-md p-5 rounded-2xl border border-white/80 shadow-2xs hover:shadow-md transition-all space-y-3.5 relative overflow-hidden group"
                  >
                    {/* Top Row: User Avatar & Info */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-600 via-indigo-600 to-rose-600 text-white font-bold flex items-center justify-center text-xs shadow-inner shrink-0">
                          {initials}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 text-sm sm:text-base">
                              {item.author}
                            </span>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50/80 text-blue-700 border border-blue-100">
                              {item.statusBadge}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                            {item.prefecture && (
                              <span className="flex items-center gap-1 text-slate-500">
                                <MapPin className="w-3 h-3 text-slate-400" />
                                {item.prefecture}
                              </span>
                            )}
                            <span>•</span>
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex text-amber-400 shrink-0">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Content text */}
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>

                    {/* Bottom action bar */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1 text-slate-500">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        Témoignage authentique
                      </span>

                      {/* Like button */}
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleToggleLike(item.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          item.liked
                            ? 'bg-rose-50 text-rose-600 border border-rose-200'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${item.liked ? 'fill-rose-500 text-rose-500' : ''}`} />
                        <span>Utile ({item.likes})</span>
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

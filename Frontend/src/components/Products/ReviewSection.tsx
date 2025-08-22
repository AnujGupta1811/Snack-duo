import React, { useState } from 'react';
import { Star, ThumbsUp, User, Verified } from 'lucide-react';

interface Review {
      id: number;
      name: string;
      rating: number;
      date: string;
      comment: string;
      verified: boolean;
      helpful: number;
}

const ReviewSection = () => {
      const [activeTab, setActiveTab] = useState<'reviews' | 'writeReview'>('reviews');
      const [newReview, setNewReview] = useState({ rating: 5, comment: '', name: '' });

      const reviews: Review[] = [
            {
                  id: 1,
                  name: 'Priya Sharma',
                  rating: 5,
                  date: 'January 15, 2024',
                  comment: 'Absolutely authentic taste! Reminds me of my grandmother\'s homemade thekua. The texture is perfect and the sweetness is just right. Will definitely order again!',
                  verified: true,
                  helpful: 12
            },
            {
                  id: 2,
                  name: 'Rajesh Kumar',
                  rating: 4,
                  date: 'January 10, 2024',
                  comment: 'Good quality thekua with traditional flavor. Packaging was excellent and arrived fresh. My family loved it during Diwali celebrations.',
                  verified: true,
                  helpful: 8
            },
            {
                  id: 3,
                  name: 'Anita Singh',
                  rating: 5,
                  date: 'January 5, 2024',
                  comment: 'Outstanding quality! The ingredients are clearly premium and you can taste the difference. Perfect for gifting during festivals.',
                  verified: false,
                  helpful: 15
            },
            {
                  id: 4,
                  name: 'Mohammed Ali',
                  rating: 5,
                  date: 'December 28, 2023',
                  comment: 'Best thekua I\'ve had outside of Bihar! The authentic taste brings back childhood memories. Highly recommended for anyone missing home flavors.',
                  verified: true,
                  helpful: 20
            }
      ];

      const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
      const ratingDistribution = [5, 4, 3, 2, 1].map(star =>
            reviews.filter(review => review.rating === star).length
      );

      const renderStars = (rating: number, interactive = false, onRate?: (rating: number) => void) => {
            return (
                  <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                    key={star}
                                    onClick={() => interactive && onRate && onRate(star)}
                                    className={`${interactive ? 'cursor-pointer hover:scale-110 transition-transform duration-200' : 'cursor-default'}`}
                                    disabled={!interactive}
                              >
                                    <Star
                                          className={`h-5 w-5 ${star <= rating
                                                ? 'text-yellow-400 fill-current'
                                                : 'text-gray-300'
                                                } ${interactive ? 'hover:text-yellow-400' : ''}`}
                                    />
                              </button>
                        ))}
                  </div>
            );
      };

      const handleSubmitReview = (e: React.FormEvent) => {
            e.preventDefault();
            // Handle review submission
            console.log('Review submitted:', newReview);
            setActiveTab('reviews');
            setNewReview({ rating: 5, comment: '', name: '' });
      };

      return (
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  {/* Review Summary */}
                  <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                              <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
                              <button
                                    onClick={() => setActiveTab('writeReview')}
                                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
                              >
                                    Write Review
                              </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                              {/* Overall Rating */}
                              <div className="text-center">
                                    <div className="text-4xl font-bold text-orange-600 mb-2">
                                          {averageRating.toFixed(1)}
                                    </div>
                                    {renderStars(Math.round(averageRating))}
                                    <div className="text-gray-600 text-sm mt-1">
                                          Based on {reviews.length} reviews
                                    </div>
                              </div>

                              {/* Rating Distribution */}
                              <div className="col-span-2">
                                    {ratingDistribution.map((count, index) => (
                                          <div key={index} className="flex items-center space-x-3 mb-2">
                                                <span className="text-sm text-gray-600 w-8">{5 - index}★</span>
                                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                      <div
                                                            className="bg-orange-400 h-2 rounded-full transition-all duration-500"
                                                            style={{ width: `${(count / reviews.length) * 100}%` }}
                                                      />
                                                </div>
                                                <span className="text-sm text-gray-600 w-8">{count}</span>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>

                  {/* Tab Navigation */}
                  <div className="border-b border-gray-200 mb-6">
                        <nav className="flex space-x-8">
                              <button
                                    onClick={() => setActiveTab('reviews')}
                                    className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === 'reviews'
                                          ? 'border-orange-500 text-orange-600'
                                          : 'border-transparent text-gray-500 hover:text-gray-700'
                                          }`}
                              >
                                    All Reviews ({reviews.length})
                              </button>
                              <button
                                    onClick={() => setActiveTab('writeReview')}
                                    className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === 'writeReview'
                                          ? 'border-orange-500 text-orange-600'
                                          : 'border-transparent text-gray-500 hover:text-gray-700'
                                          }`}
                              >
                                    Write a Review
                              </button>
                        </nav>
                  </div>

                  {/* Reviews List */}
                  {activeTab === 'reviews' && (
                        <div className="space-y-6">
                              {reviews.map((review) => (
                                    <div
                                          key={review.id}
                                          className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                                    >
                                          <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center space-x-3">
                                                      <div className="bg-orange-100 rounded-full p-2">
                                                            <User className="h-5 w-5 text-orange-600" />
                                                      </div>
                                                      <div>
                                                            <div className="flex items-center space-x-2">
                                                                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                                                  {review.verified && (
                                                                        <div className="flex items-center space-x-1 text-green-600">
                                                                              <Verified className="h-4 w-4" />
                                                                              <span className="text-xs">Verified</span>
                                                                        </div>
                                                                  )}
                                                            </div>
                                                            <div className="flex items-center space-x-2 mt-1">
                                                                  {renderStars(review.rating)}
                                                                  <span className="text-gray-500 text-sm">{review.date}</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>

                                          <div className="flex items-center justify-between">
                                                <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-200">
                                                      <ThumbsUp className="h-4 w-4" />
                                                      <span className="text-sm">Helpful ({review.helpful})</span>
                                                </button>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  )}

                  {/* Write Review Form */}
                  {activeTab === 'writeReview' && (
                        <form onSubmit={handleSubmitReview} className="space-y-6">
                              <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Your Name
                                    </label>
                                    <input
                                          type="text"
                                          value={newReview.name}
                                          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                          placeholder="Enter your name"
                                          required
                                    />
                              </div>

                              <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Rating
                                    </label>
                                    {renderStars(newReview.rating, true, (rating) =>
                                          setNewReview({ ...newReview, rating })
                                    )}
                              </div>

                              <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Your Review
                                    </label>
                                    <textarea
                                          value={newReview.comment}
                                          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                          rows={4}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                                          placeholder="Share your experience with this product..."
                                          required
                                    />
                              </div>

                              <button
                                    type="submit"
                                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                              >
                                    Submit Review
                              </button>
                        </form>
                  )}
            </div>
      );
};

export default ReviewSection;
class Idea < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true
  validates :body, presence: true, uniqueness: true

  has_one :quality

  default_scope { order(created_at: "desc") }

  def update_quality(vote)
    if vote == "upvote"
      self.quality_id += 1 unless self.quality_id == 3
    elsif vote == "downvote"
      self.quality_id -= 1 unless self.quality_id == 1
    end
  end
end

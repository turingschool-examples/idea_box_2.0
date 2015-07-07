class Idea < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true
  validates :body, presence: true, uniqueness: true

  has_one :quality

  default_scope { order(created_at: "desc") }
end

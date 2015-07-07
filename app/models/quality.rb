class Quality < ActiveRecord::Base
  has_many :ideas

  validates :option, presence: true, uniqueness: true
end

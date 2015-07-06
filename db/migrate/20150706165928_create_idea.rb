class CreateIdea < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.string :title
      t.string :body
      t.references :quality, index: true, foreign_key: true
    end
  end
end

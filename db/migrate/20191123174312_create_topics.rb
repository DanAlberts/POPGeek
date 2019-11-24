class CreateTopics < ActiveRecord::Migration[5.2]
  def change
    create_table :topics do |t|
      t.string :title, null: false
      t.belongs_to :category
      t.timestamps
    end
  end
end

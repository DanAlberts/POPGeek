class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :title
      t.integer :category_count
      t.integer :user_count
      t.integer :online_count
      t.integer :topic_count
      t.integer :post_count
      t.timestamps
    end
  end
end

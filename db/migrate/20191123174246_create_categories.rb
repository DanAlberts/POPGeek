class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :title, null: false
      t.belongs_to :board
      t.timestamps
    end
  end
end

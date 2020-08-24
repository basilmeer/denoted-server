class AddCategoryIdToNotes < ActiveRecord::Migration[6.0]
  def change
    add_reference :notes, :category, foreign_key: true
  end
end

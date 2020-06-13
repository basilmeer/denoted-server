# frozen_string_literal: true

class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.string :title, null: false, default: ''
      t.string :body, null: false, default: ''
      t.json :tags, array: true
      t.integer :status, default: 0

      t.timestamps
    end
  end
end

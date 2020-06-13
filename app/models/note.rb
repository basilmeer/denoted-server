# frozen_string_literal: true

class Note < ApplicationRecord
  belongs_to :user

  enum starred: [:true :false]
  enum deleted: [:true :false]
end

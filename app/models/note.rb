# frozen_string_literal: true

class Note < ApplicationRecord
  enum status: [:default, :starred, :trashed, :draft]
end

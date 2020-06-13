# frozen_string_literal: true

class NotesController < ApplicationController
  def index
    notes = Note.all
    render json:
    {
      notes: notes,
      status: 200
    }
  end

  def new
    note = Note.new(title: params[:title], body: params[:body], tags: params[:tags])
    if note.save
      render json:
      {
        data: 'Note saved successfully.',
        status: 200
      }
    else
      render json:
      {
        data: 'Something went wrong.',
        status: 400
      }
    end
  end

  def update
    note = Note.find_by_id(params[:id]).update(title: params[:title], body: params[:body], tags: params[:tags])
    {
      data: 'Note updated successfully.',
      status: 200
    }
  end
end

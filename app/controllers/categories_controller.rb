class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render json:
    {
      categories: categories,
      status: 200
    }
  end

  def save
    Category.where(permitted_params).first_or_create
    render json:
    {
      message: 'Note successfully created!',
      status: 200
    }
  end

  private

  def permitted_params
    params.permit(:name, :color)
  end
end

class Api::V1::CategoriesController < ApiController

  def index
    render json: Category.all
  end

  def show

  end
end
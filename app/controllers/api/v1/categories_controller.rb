class Api::V1::CategoriesController < ApiController

  def index
    render json: Category.all
  end

  def show
    category = category.find(params[:id])
    render json: {
      category: category,
      scope: [current_user, user_signed_in?],
      topics: category.topics
    }
  end
end
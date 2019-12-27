class Api::V1::PostsController < ApiController

  def index

  end

  def show

  end

  def create
    topic = Topic.find(params[:topic_id])
    topic.category_id = params[:category_id]

    post = Post.new(post_params)
    post.user_id = current_user.id
    post.topic = topic
    if post.save
      render json: topic
    else
      render json: {status: "error"}
    end
  end

  def post_params
    params.permit(:content)
  end
end
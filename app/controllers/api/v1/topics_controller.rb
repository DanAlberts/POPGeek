class Api::V1::TopicsController < ApiController

  def show

  end

  def create
    
    topic = Topic.new(topic_params)
    topic.category_id = params[:category_id]

    post = Post.new(content: post_params, topic_id: topic.id)
    post.user_id = current_user.id
    if topic.save
      post.topic = topic
      post.save
      render json: {}
    else
      render json: {status: "error"}
    end

  end

  private

  def topic_params
    params.require(:topic).permit(:title)
  end

  def post_params
    params.permit(:firstpost)
  end
end
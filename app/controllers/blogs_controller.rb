class BlogsController < ApplicationController
  before_action :set_blog, only: [:show, :update, :destroy]
  skip_before_action :authorize

  # GET /blogs
  def index
    blogs = Blog.all

    render json: blogs
  end

  # def order
  #   blogs=Blog.all
  #   render json: blogs.order(views: :desc)
  # end

  # GET /blogs/1
  def show
    @blog = Blog.find(params[:id])
    render json: @blog
  end

  # POST /blogs
  def create
    @blog = Blog.new(blog_params)

    if @blog.save
      render json: @blog, status: :created, location: @blog
    else
      render json: { errors: @blog.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /blogs/1
  def update
    if @blog.update(blog_params)
      render json: @blog
    else
      render json: @blog.errors, status: :unprocessable_entity
    end
  end

  # DELETE /blogs/1
  def destroy
    @blog.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog
      @blog = Blog.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def blog_params
      params.require(:blog).permit(:title, :content, :topic, :user_id, :views)
    end
end

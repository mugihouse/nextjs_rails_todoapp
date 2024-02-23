class TodosController < ApplicationController
  def index
    # 日付が新しい順に10件まで取得する
    @todos = Todo.all.order(created_at: :desc).limit(10)

    render json: @todos
  end
end

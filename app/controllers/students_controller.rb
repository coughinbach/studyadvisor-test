class StudentsController < ApplicationController
  before_action :find_student, only: [ :show, :edit, :update, :destroy]

  def index
    @students = Student.all
  end

  def show
  end

  def new
    @student = Student.new
  end

  def create
    @student = Student.new(student_params)
    if @student.save
      respond_to do |format|
        format.html { redirect_to students_path }
        format.js
      end
    else
      respond_to do |format|
        format.html { render :new }
        format.js
      end
    end
  end

  def edit
  end

  def update
    if @student.update(student_params)
      redirect_to student_path(@student)
    else
      render :edit
    end
  end

  def destroy
    @student.destroy
    redirect_to students_path
  end

  private

  def student_params
    params.require(:student).permit(:name)
  end

  def find_student
    @student = Student.find(params[:id])
  end
end

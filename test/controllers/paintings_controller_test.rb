require "test_helper"

class PaintingsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get paintings_new_url
    assert_response :success
  end

  test "should get create" do
    get paintings_create_url
    assert_response :success
  end

  test "should get destroy" do
    get paintings_destroy_url
    assert_response :success
  end
end

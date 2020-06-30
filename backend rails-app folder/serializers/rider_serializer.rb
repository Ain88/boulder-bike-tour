class RiderSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :city, :state, :lat_long, :photo
end

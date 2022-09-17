module Mutations
  class Note < BaseMutation
    field :note, Types::NoteType, null: false

    argument :title, String, required: true
    argument :body, String, required: true
    argument :category_id, Integer, required: true

    def resolve(title:, body:, category_id:)
      {
        note: {
          title: title,
          body: body,
          category_id: category_id
        }
      }
    end
  end
end

module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :notes, [Types::NoteType], description: 'Returns all notes'
    field :categories, [Types::CategoryType], description: 'Returns all categories'

    def notes
      Note.all
    end

    def categories
      Category.all
    end
  end
end

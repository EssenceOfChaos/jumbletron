from sqlalchemy import Column, String
from sqlalchemy.dialects.postgresql import ARRAY
from marshmallow import Schema, fields
from .entity import Entity, Base

class Puzzle(Entity, Base):
    __tablename__ = 'puzzles'

    question = Column(String)
    words = Column(ARRAY(String))
    answer = Column(String)

    def __init__(self, question, words, answer, created_by):
        Entity.__init__(self, created_by)
        self.question = question
        self.words = words
        self.answer = answer

class PuzzleSchema(Schema):
    id = fields.Number()
    question = fields.Str()
    words = fields.List(fields.String)
    answer = fields.Str()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()
    last_updated_by = fields.Str()
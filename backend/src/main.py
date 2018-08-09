from .entities.entity import Session, engine, Base
from .entities.puzzle import Puzzle, PuzzleSchema

# Flask
from flask import Flask, jsonify, request, abort
from flask_cors import CORS
from pyspark import SparkContext, SparkConf

# creating the Flask application
app = Flask(__name__)
CORS(app)
# generate database schema
Base.metadata.create_all(engine)
## exposing Flask endpoints
@app.route('/puzzles')
def get_puzzles():
    # fetching from the database
    session = Session()
    puzzle_objects = session.query(Puzzle).all()

    # transforming into JSON-serializable objects
    schema = PuzzleSchema(many=True)
    puzzles = schema.dump(puzzle_objects)

    # serializing as JSON
    session.close()
    return jsonify(puzzles.data)

@app.route('/anagram/<word>')
def get_anagrams(word=None):
    if word is None:
        word = request.args.get('word')
        if name:
            anagrams.anagram(word)
    else:
        abort(404)


@app.route('/puzzles', methods=['POST'])
def add_puzzle():

    posted_puzzle = PuzzleSchema(only=('question', 'answer'))\
        .load(request.get_json())

    puzzle = Puzzle(**posted_puzzle.data, created_by="HTTP post request")

    # persist puzzle
    session = Session()
    session.add(puzzle)
    session.commit()

    # return created puzzle
    new_puzzle = PuzzleSchema().dump(puzzle).data
    session.close()
    return jsonify(new_puzzle), 201



# start session
# session = Session()

# check for existing data
# puzzles = session.query(Puzzle).all()

# if len(puzzles) == 0:

#     python_puzzle = Puzzle("Example Question", ["word1", "two", "three"], "Example Answer", "script")
#     session.add(python_puzzle)
#     session.commit()
#     session.close()

    # reload puzzles
    # puzzles = session.query(Puzzle).all()

# show existing puzzles
# print('Puzzles: ')
# for puzzle in puzzles:
#     print(f'({puzzle.id}) {puzzle.question} - {puzzle.answer}')

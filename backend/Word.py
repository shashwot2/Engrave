from datetime import datetime
from datetime import timedelta
class Word:
    def __init__(self, word, level = 1, nextReview = datetime.now()):
        self.word = word
        self.level = level
        self.nextReview = nextReview
    
    def setLevel(self, level, nextReview):
        self.level = level
        self.nextReview = nextReview
    
    def getWord(self):
        return self.word
    
    def getLevel(self):
        return self.level
    
    def getNextReview(self):
        return self.nextReview
    
    def exists(self, WordList):
        for word in WordList:
            if word == self.word:
                return True
        return False
    
    def to_json(self):
        return {
            "word": self.word,
            "level": self.level,
            "nextReview": self.nextReview
        }
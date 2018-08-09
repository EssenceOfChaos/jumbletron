def build_dict(path):
    # Load in word file and sort each line.
    words = {}
    f = open(path, "r")
    for line in f.readlines():
        line = line.strip()
        key = sorted_line(line)
        if key in words:
            v = words.get(key) + "," + line
            words[key] = v
        else:
            words[key] = line
    return words

def sorted_line(line):
    # Sort the chars in this line and return a string.
    chars = [c for c in line]
    chars.sort()
    return "".join(chars)

def anagram(words, line):
    # Return a list of anagrams from the dictionary.
    key = sorted_line(line)
    values = words.get(key, "NONE")
    return values.split(",")

words = build_dict(r"./assets/words.txt")
results = anagram(words, "spot")

print("Anagrams for [spot]")
print(results)
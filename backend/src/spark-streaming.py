# from pyspark import SparkContext
# from pyspark.streaming import StreamingContext
from pyspark.sql import SparkSession
spark = SparkSession.builder.appName("jumbles").getOrCreate()
df = spark.read.csv('walmart_stock.csv',header=True,inferSchema=True)







# sc = SparkContext("local[2]", "Jumbletron")
# ssc = StreamingContext(sc, 1)
# lines = ssc.socketTextStream("localhost", 8181)
# words = lines.flatMap(lambda line: line.split(" "))

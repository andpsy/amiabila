using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;

namespace amiabila_backend.Models
{
  public class MongoDbLayer
  {
    private IMongoDatabase db;

    public MongoDbLayer(string dbName)
    {
      var client = new MongoClient();
      db = client.GetDatabase(dbName);
    }

    public void InsertRecord<T>(string tableName, T record)
    {
      var collection = db.GetCollection<T>(tableName);
      collection.InsertOne(record);
    }

    public void UpsertRecord<T>(string tableName, Guid id, T record)
    {
      var collection = db.GetCollection<T>(tableName);
      var result = collection.ReplaceOne(new BsonDocument("_id", id), record, new ReplaceOptions { IsUpsert = true });
    }

    public List<T> LoadRecords<T>(string tableName)
    {
      var collection = db.GetCollection<T>(tableName);
      return collection.Find(new BsonDocument()).ToList();
    }

    public T LoadRecordById<T>(string tableName, Guid id)
    {
      var collection = db.GetCollection<T>(tableName);
      var filter = Builders<T>.Filter.Eq("Id", id);
      return collection.Find(filter).First();
    }
  }
}

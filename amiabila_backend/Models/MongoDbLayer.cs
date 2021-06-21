using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Reflection;

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
      Type t = record.GetType();
      PropertyInfo prop = t.GetProperty("Id");
      prop.SetValue(record, Guid.NewGuid());
      collection.InsertOne(record);
    }
    public void UpdateRecord<T>(string tableName, Guid id, T record)
    {
      var collection = db.GetCollection<T>(tableName);
      var filter = Builders<T>.Filter.Eq("_id", id);
      collection.ReplaceOne(filter, record);
    }

    public void UpsertRecord<T>(string tableName, T record)
    {
      Type t = record.GetType();
      PropertyInfo prop = t.GetProperty("Id");
      if (prop.GetValue(record) == null)
      {
        this.InsertRecord(tableName, record);
      }
      else
      {
        Guid id = new Guid(prop.GetValue(record).ToString());
        this.UpdateRecord(tableName, id, record);
      }
    }
    /*
    public void UpsertRecord<T>(string tableName, Guid id, T record)
    {
      BsonBinaryData binData = new BsonBinaryData(id, GuidRepresentation.Standard);
      var collection = db.GetCollection<T>(tableName);
      var result = collection.ReplaceOne(new BsonDocument("_id", binData), record, new ReplaceOptions { IsUpsert = true });
    }
    */
    public void DeleteRecord<T>(string tableName, Guid id)
    {
      var collection = db.GetCollection<T>(tableName);
      var filter = Builders<T>.Filter.Eq("_id", id);
      collection.DeleteOne(filter);
    }

    public List<T> LoadRecords<T>(string tableName)
    {
      var collection = db.GetCollection<T>(tableName);
      return collection.Find(new BsonDocument()).ToList();
    }

    public T LoadRecordById<T>(string tableName, Guid id)
    {
      var collection = db.GetCollection<T>(tableName);
      var filter = Builders<T>.Filter.Eq("_id", id);
      return collection.Find(filter).First();
    }
  }
}

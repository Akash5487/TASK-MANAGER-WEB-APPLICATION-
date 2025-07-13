const AWS = require('aws-sdk');
require('dotenv').config();

// Configure AWS SDK
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

// Create a task
const createTask = async (task) => {
  const params = {
    TableName: TABLE_NAME,
    Item: {
      taskId: task.taskId,
      title: task.title,
      description: task.description,
      status: task.status || 'Pending'
    }
  };
  try {
    await dynamoDB.put(params).promise();
    return { success: true, data: params.Item };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get all tasks
const getTasks = async () => {
  const params = { TableName: TABLE_NAME };
  try {
    const data = await dynamoDB.scan(params).promise();
    return { success: true, data: data.Items };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update a task
const updateTask = async (taskId, updates) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { taskId },
    UpdateExpression: 'set title = :t, description = :d, status = :s',
    ExpressionAttributeValues: {
      ':t': updates.title,
      ':d': updates.description,
      ':s': updates.status
    },
    ReturnValues: 'UPDATED_NEW'
  };
  try {
    const data = await dynamoDB.update(params).promise();
    return { success: true, data: data.Attributes };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Delete a task
const deleteTask = async (taskId) => {
  const params = { TableName: TABLE_NAME, Key: { taskId } };
  try {
    await dynamoDB.delete(params).promise();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
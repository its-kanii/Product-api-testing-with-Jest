const Item = require('../../models/Item');
const itemController = require('../../controllers/itemController');

jest.mock('../../models/Item');

describe('Unit Test: itemController', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {},
      params: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.clearAllMocks();
  });

  test('getItems should return all items', async () => {
    const items = [{ name: 'Book', quantity: 2 }];
    Item.find.mockResolvedValue(items);

    await itemController.getItems(req, res);

    expect(res.json).toHaveBeenCalledWith(items);
  });

  test('addItem should create and return a new item', async () => {
    req.body = { name: 'Notebook', quantity: 10 };
    const mockItem = { ...req.body, save: jest.fn().mockResolvedValue() };

    Item.mockImplementation(() => mockItem);

    await itemController.addItem(req, res);

    expect(mockItem.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockItem);
  });

  test('addItem should handle errors', async () => {
    req.body = { name: 'ErrorItem', quantity: 1 };
    const error = new Error('Save failed');
    const mockItem = { ...req.body, save: jest.fn().mockRejectedValue(error) };

    Item.mockImplementation(() => mockItem);

    await itemController.addItem(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Save failed' });
  });

  test('updateItem should update and return the item', async () => {
    req.params.id = '123';
    req.body = { name: 'Updated', quantity: 5 };
    const updatedItem = { _id: '123', ...req.body };

    jest.spyOn(Item, 'findByIdAndUpdate').mockResolvedValue(updatedItem);

    await itemController.updateItem(req, res);

    expect(res.json).toHaveBeenCalledWith(updatedItem);
  });

  test('deleteItem should delete the item and return confirmation', async () => {
    req.params.id = '123';

    jest.spyOn(Item, 'findByIdAndDelete').mockResolvedValue();

    await itemController.deleteItem(req, res);

    expect(res.json).toHaveBeenCalledWith({ message: 'Item deleted successfully' });
  });
});


























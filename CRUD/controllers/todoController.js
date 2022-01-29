exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json({
    sucess: true,
    data: todos,
  });
};

exports.createTodo = async (req, res) => {
  const { title, description } = req.body;
  const todo = await Todo.create({
    title,
    description,
  }).catch((err) => {
    const errors = err.errors;
    const keys = Object.keys(errors);
    const errorObj = {};
    keys.map((key) => {
      errorObj[key] = errors[key].message;
    });

    res.status(408).json({
      success: false,
      errors: errorObj,
    });
  });
  res.status(201).json(todo);
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id).catch((err) => {
    return res.status(400).json({
      success: false,
    });
  });

  res.json({
    success: true,
  });
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  await Todo.findByIdAndUpdate(id, { title, description }).catch((err) => {
    return res.status(400).json({
      success: false,
      message: 'can not update',
    });
  });

  res.json({ success: true });
};

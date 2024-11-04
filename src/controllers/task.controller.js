import Task from "../models/Task";

export const renderTask = async (req, res) => {
  const tasksFromDB = await Task.find().lean();
  //console.log(tasksFromDB);
  res.render("index", { tasksFromDB: tasksFromDB });
};

export const renderAbout = (req, res) => {
  res.render("about");
};

export const renderEditTask = async (req, res) => {
  try {
    const taskToEdit = await Task.findById(req.params.id).lean();
    //console.log(taskToEdit);
    res.render("editTask", { taskToEdit });
  } catch (error) {
    console.log(error.message);
  }
};

export const renderEditingTask = async (req, res) => {
  try {
    //console.log(req.body);
    //console.log(req.params.id);
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);

    //res.send("Editado");
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const renderDeleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);

    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const renderTogleDone = async (req, res) => {
  try {
    const { id } = req.params;
    const DoneUndone = await Task.findById(id);

    DoneUndone.done = !DoneUndone.done;

    await DoneUndone.save();
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const renderAddTask = async (req, res) => {
  try {
    //console.log(req.body);
    const task = Task(req.body);
    const taskSaved = await task.save();
    //console.log(taskSaved);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

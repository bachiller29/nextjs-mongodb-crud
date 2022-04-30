import {Schema,model,models} from 'mongoose'

const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        uniq: true,
        trim: true,
        maxlength: [50, 'Title must be lees than 40 characters']
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: [200, 'Description must be lees than 200 characters']
    }
}, {
    timestamps: true,
    versionKey: false
})

export default models.Task || model("Task", taskSchema);
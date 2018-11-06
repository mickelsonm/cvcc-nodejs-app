import mongoose from 'mongoose';

const QuoteSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    author: {
      type: String,
      required: true,
      unique: false,
      index: true
    },
    quote: {
      type: String,
      required: true,
      unique: false,
      index: false
    },
    created: {
      type: Date,
      required: true,
      default: Date.now
    }
  },
  {
    collection: 'Quote'
  }
);

export default mongoose.model('Quote', QuoteSchema);

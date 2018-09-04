const Ds = require('deepspeech')
const Fs = require('fs');
const Sox = require('sox-stream');
const MemoryStream = require('memory-stream');
const Duplex = require('stream').Duplex;
const Wav = require('node-wav');

// These constants control the beam search decoder

// Beam width used in the CTC decoder when building candidate transcriptions
const BEAM_WIDTH = 500;

// The alpha hyperparameter of the CTC decoder. Language Model weight
const LM_WEIGHT = 1.75;

// Valid word insertion weight. This is used to lessen the word insertion penalty
// when the inserted word is part of the vocabulary
const VALID_WORD_COUNT_WEIGHT = 1.00;


// These constants are tied to the shape of the graph used (changing them changes
// the geometry of the first layer), so make sure you use the same constants that
// were used during training

// Number of MFCC features to use
const N_FEATURES = 26;

// Size of the context window used for producing timesteps in the input vector
const N_CONTEXT = 9;

export default function (url) {
  var modelName = '/dades/DeepSpeech/models/output_graph.pb';
  var alphabet = '/dades/DeepSpeech/models/alphabet.txt';
  var lm = '/dades/DeepSpeech/models/lm.binary';
  var trie = '/dades/DeepSpeech/models/trie';
  var audioFile = '';
  return parseAudio(audioFile, modelName, alphabet, lm, trie);
}

function bufferToStream(buffer) {
 /* var stream = new Duplex();
  stream.push(buffer);
  stream.push(null);
  return stream;*/
}


var parseAudio = function (audioFile, modelName, alphabet, lm, trie) {
/*
  const buffer = Fs.readFileSync(audioFile);
  const result = Wav.decode(buffer);

  if (result.sampleRate < 16000) {
    console.error('Warning: original sample rate (' + result.sampleRate + ') is lower than 16kHz. Up-sampling might produce erratic speech recognition.');
  }


  var audioStream = new MemoryStream();
  bufferToStream(buffer).
    pipe(Sox({ output: { bits: 16, rate: 16000, channels: 1, type: 'raw' } })).
    pipe(audioStream);

  audioStream.on('finish', () => {
    var audioBuffer = audioStream.toBuffer();
    console.error('Loading model from file %s', modelName);
    const model_load_start = process.hrtime();
    var model = new Ds.Model(modelName, N_FEATURES, N_CONTEXT, alphabet, BEAM_WIDTH);
    const model_load_end = process.hrtime(model_load_start);
    console.error('Loaded model in %ds.', totalTime(model_load_end));

    if (lm && trie) {
      console.error('Loading language model from files %s %s', lm, trie);
      const lm_load_start = process.hrtime();
      model.enableDecoderWithLM(alphabet, lm, trie,
        LM_WEIGHT, VALID_WORD_COUNT_WEIGHT);
      const lm_load_end = process.hrtime(lm_load_start);
      console.error('Loaded language model in %ds.', totalTime(lm_load_end));
    }

    const inference_start = process.hrtime();
    console.error('Running inference.');
    const audioLength = (audioBuffer.length / 2) * (1 / 16000);

    // We take half of the buffer_size because buffer is a char* while
    // LocalDsSTT() expected a short*
    console.log(model.stt(audioBuffer.slice(0, audioBuffer.length / 2), 16000));
    const inference_stop = process.hrtime(inference_start);
    console.error('Inference took %ds for %ds audio file.', totalTime(inference_stop), audioLength.toPrecision(4));
  });*/
}


function totalTime(hrtimeValue) {
  //return (hrtimeValue[0] + hrtimeValue[1] / 1000000000).toPrecision(4);
}

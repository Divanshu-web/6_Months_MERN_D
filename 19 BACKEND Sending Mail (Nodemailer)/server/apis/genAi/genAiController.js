
const {GoogleGenAI} = require('@google/genai')
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

async function main(req, res) {
    try{

        let formData = req.body || {};

        if(!formData.prompt) {
            res.json({
                status: 400,
                success: false,
                message: "Prompt is required"
            })
        }

        let newPrompt = "tum ek ai agent ho o7services k, jo ki training provide krte hain, jalandhar mein -- user k jawaab do funny language mein, jokes type-" + formData.prompt

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: newPrompt,
        });

        if(!response){
            return res.json({
            status: 500,
            success: false,
            message: "Error!!: "
        })
        }
        
        res.json({
            status: 200,
            success: true,
            message: "Content generated!!",
            data: response.text
        })


    }catch(err){
        res.json({
            status: 500,
            success: false,
            message: "error generating content: " + err
        })
    }
}

module.exports = {main};
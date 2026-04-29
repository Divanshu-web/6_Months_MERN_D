const { GoogleGenAI } = require("@google/genai")
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });


const main = async (req, res) => {
    try {
        if (!req.body.prompt) {
            res.send({
                status: 400,
                success: false,
                message: "Prompt is required"
            })
        }
        else {       
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents:  req.body.prompt,
            });

            if (!response) {
                return res.send({
                    status: 400,
                    success: false,
                    message: "Ai Error"
                })
            }
            else {
                return res.send({
                    status: 200,
                    success: true,
                    message: "Content Generated",
                    data: response.text
                })
            }

        }
    } catch (error) {
        res.json({
            status: 500,
            success: false,
            message: "Internal Error" + error
        })
    }
}

module.exports = {
    main
}
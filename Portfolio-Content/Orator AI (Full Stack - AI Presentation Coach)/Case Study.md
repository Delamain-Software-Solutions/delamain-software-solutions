Orator AI is an AI powered presentation coaching web application that analyzes a user's video recording and returns detailed scored feedback on both verbal and non-verbal communication. Users record themselves presenting directly in the browser or upload an existing video, and the platform produces a full analysis report including transcription, delivery scores, gesture and posture detection, and a timestamped breakdown. Built with React and Django REST Framework.

🔍 The Problem
The client had developed AI and computer vision research for analyzing presentations but had no product around it. They needed a full-stack web application that could accept video input, run it through multiple analysis services, and present the results in a clean, actionable dashboard. The challenge was building a frontend that handled live recording and file upload, a backend coordinating independent analysis services, and a results layer that turned raw model output into something a user could act on.

🏗️ How We Built It
We built the application with a microservices backend architecture coordinated by a central API, keeping each analysis service independent and separately deployable.

Frontend and user input:

In-browser video recording built in React using the MediaRecorder API, capturing webcam and microphone input directly

File upload interface for users submitting existing recordings in standard video formats
Responsive web application design optimized for desktop and mobile

Backend microservices:

Central Django REST Framework API orchestrating the full analysis pipeline
Verbal analysis service: transcription, pacing analysis, filler word detection, clarity scoring, and speech delivery rating
Non-verbal analysis service: MediaPipe computer vision and custom trained ML models for gesture recognition, posture analysis, and eye contact detection
Each service runs independently, making the system extensible and each model separately updatable

Results dashboard:

Full transcription with speaker timestamps
Verbal and non-verbal communication scores with category breakdowns
Timeline-based video breakdown mapping detected gestures and behaviors to specific moments in the recording
Positive and negative annotations at each point so users know exactly where their delivery was strong and where it slipped

🚀 Results
The client launched a complete AI powered coaching product that takes a raw video and returns a detailed, timestamped performance report. All core features, verbal scoring, non-verbal detection, transcription, and the timeline breakdown, went live end to end, giving users a coaching experience previously only available through human coaches.
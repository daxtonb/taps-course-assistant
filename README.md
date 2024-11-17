# taps-course-assistant

> [!IMPORTANT]
> I've only tested this using Google Chrome version 130.0.6723.91 on Fedora 40. Feel free to reach out to me if you're having issues. These instructions will not work on most government computers, as the browser developer tools are usually disabled by administrators

## Course-Specific Instructions

### Employment Fundamentals of Career Transition (EFCT)

1. Open a lesson
2. With the lesson window loaded, scroll to the bottom of the screen until you see a disabled button labeled "Complete all interactive content above before moving on"
3. Execute the script using the instructions in the **How to Run the Script** section below. The script will click on 90% of the clickable content\* required to continue the course, as well as play any videos on the page at 10x speed (videos aren't skip-able)
4. The disabled button from **Step 1** should now be enabled. Click on it
5. Repeat **Steps 1-4** until the course is completed

> [!NOTE]
> \*The only thing I couldn't automate was handling the carousel/slide show components. You'll have to manually click the right-arrow button to get to the end of the slideshow. You will also need to manually take the quizzes, and you won't be able to continue until you've achieved a passing score

### Financial Planning for Transition

1. Open a lesson
2. With the lesson window loaded, click the "Play" button to start the "Introduction" video
3. Continue to the next slide
4. Execute the script using the instruction sin the **How to Run the Script** section below. This will permanently enable the "Next" button
5. Continuously click the "Next" button until you reach the end of the lesson. Close the window to receive credit for the lesson.
6. Repeat **Steps 1-5** for each lesson

### Managing Your (MY) Transition

(Same instructions as **Employment Fundamentals of Career Transition (EFCT)**)

### Military Occupational Code (MOC) Crosswalk

(Same instructions as **Employment Fundamentals of Career Transition (EFCT)**)

### VA Benefits and Services

1. Open a lesson
2. Execute the script using the instruction sin the **How to Run the Script** section below. This will repeatedly click the "Next" button at a frequency of 1 second.
3. There's no easy way around this course. Find something else to do and script will repeatedly click the "Next" button when it becomes available at the end of each video. There are a few pages with interactive content or quizzes that will require your intervention, so check back periodically to see if it's waiting for you to intervene.

### Wounded Warrior and Caregiver EFCT

(Same instructions as **Employment Fundamentals of Career Transition (EFCT)**)

## How to Run the Script

1. With the course in progress, open your web browser's developer tools (normally the `[F12]` key or `[Ctrl]+[Shift]+[I]`) from the course pop-out window
2. Navigate to the `Console` tab in the developer tools window
3. Copy the contents of [taps.js](https://github.com/daxtonb/taps-course-assistant/blob/main/taps.js) and paste it into the console. Press `[Enter]` to execute the script.

> [!NOTE]
> If this is your first time using your browser's console, you may be asked to enter "allow pasting" into the console before your browser will allow you to paste the code

4. It's not necessary to paste again for subsequent runs of the script. Simply use the up-arrow button to load the last command and hit `[Enter]`

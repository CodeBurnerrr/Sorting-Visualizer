# Sorting Visualizer

Sorting Visualizer is an interactive web application built with React, TypeScript, and Redux to help users visualize how different sorting algorithms work. This project is perfect for students, educators, and anyone curious about understanding sorting algorithms in an intuitive and fun way.

---

## 🚀 Features

- 🎨 **Interactive Visualization**: Watch how the algorithms sort arrays step-by-step.
- 🖥️ **Responsive Design**: Works seamlessly across devices and screen sizes.
- ⚡ **Multiple Algorithms**: Includes popular sorting algorithms such as:
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
- 🛠️ **Customizability**:
  - Adjust the array size.
  - Change the sorting speed.
  - Generate new random arrays.
- 🔄 **State Management with Redux**: All app states, such as the array data, sorting speed, and algorithm selection, are managed centrally with Redux.
- 📚 **Educational Tool**: Perfect for learning the internal workings of sorting algorithms.

---

## 🛠️ Tech Stack

- **Frontend**: React (with TypeScript)
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS or custom CSS (depending on your project)
- **Build Tool**: Vite (optional, if used) or Create React App

---

## 📂 Project Structure

```
sorting-visualizer/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         // Navigation bar
│   │   ├── Visualizer.tsx     // Main visualization component
│   │   ├── Controls.tsx       // Buttons and sliders for customization
│   │   └── Footer.tsx         // Footer of the app
│   ├── features/
│   │   ├── sortingSlice.ts    // Redux slice for managing sorting states
│   │   └── store.ts           // Redux store configuration
│   ├── algorithms/
│   │   ├── bubbleSort.ts      // Bubble sort implementation
│   │   ├── insertionSort.ts   // Insertion sort implementation
│   │   ├── mergeSort.ts       // Merge sort implementation
│   │   ├── quickSort.ts       // Quick sort implementation
│   │   └── selectionSort.ts   // Selection sort implementation
│   ├── App.tsx                // Root component
│   ├── index.tsx              // Entry point
│   └── styles/                // Styling (CSS or Tailwind classes)
├── package.json
└── README.md
```

---

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/sorting-visualizer.git
   cd sorting-visualizer
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open the app**:
   Navigate to `http://localhost:3000` in your browser.

---

## 🔧 Usage

1. **Select an Algorithm**: Choose the sorting algorithm you want to visualize.
2. **Customize the Array**:
   - Adjust the size of the array using the slider.
   - Change the sorting speed.
3. **Start Visualization**: Click on the "Start" button to watch the sorting process.
4. **Reset or Generate New Array**: Click on the "Generate Array" button to reset or create a new array.

---

## 🌟 Features Powered by Redux

- **Centralized State**: The array data, sorting algorithm, and speed are all managed globally for better performance and maintainability.
- **Real-time Updates**: Changes in controls instantly reflect in the visualization due to Redux state synchronization.
- **Extensibility**: Easily add new features by extending the Redux store.

---

## 📸 Screenshots

### Home Page
![Sorting Visualizer Home Page](https://via.placeholder.com/800x400)

### Bubble Sort in Action
![Bubble Sort Visualization](https://via.placeholder.com/800x400)

---

## 🚧 Future Enhancements

- Add more sorting algorithms (e.g., Heap Sort, Radix Sort).
- Allow users to pause and resume visualization.
- Display time and space complexity of each algorithm during visualization.
- Support for dark mode.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to create an issue or submit a pull request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌟 Acknowledgements

- Inspired by various sorting visualizer projects available online.
- Built with ❤️, React TypeScript, and Redux.

---

Let me know if you need further adjustments or customizations!

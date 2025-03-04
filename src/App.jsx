import React, { useState } from 'react';
import GlobalCanvas from './Component/GlobalCanvas';
import FeatureContainer from './Component/FeatureContainer';
import ModelRenderer from './Component/ModelRenderer';
import MousePositionDisplay from './Component/MousePositionDisplay';
import Contactus from './Component/Contactus';

const featureConfig = [
  { id: 'feature1', position: [0, -1.7, -3], rotation: { x: 2, y: 0.2, z: 1.9 }, label: 'First view' },
  { id: 'feature1_0', position: [0, 0, -2], rotation: { x: 0, y: 0, z: 0 }, label: 'just thing view' },
  { id: 'feature2', position: [0, -1.5, 0], rotation: { x: 0, y: 9.5, z: 0 }, label: 'Front View' },
  { id: 'feature3', position: [0, -0.5, -2], rotation: { x: -1.5, y: 9.5, z: 0 }, label: 'Bottom View' },
  { id: 'feature4', position: [1.5, 0, -1], rotation: { x: 0, y: 5.2, z: 0 }, label: 'Back View' },
  { id: 'feature5', position: [-3, 0, -2], rotation: { x: 0, y: -5.5, z: 0 }, label: 'Contact View' },
];

const App = () => {
  const [modelState, setModelState] = useState({
    targetRotation: { x: 2, y: 0.5, z: 2 },
    targetPosition: [0, -10, -2],
  });

  // State to track zIndex for each feature
  const [zIndexState, setZIndexState] = useState({
    feature1: 20,
    feature1_0: 20,
    feature2: 20,
    feature3: 20,
    feature4: 1,
    feature5: 20,
  });

  const handleFeatureEnter = (featureId) => {
    // Increase the zIndex of the selected feature
    setZIndexState((prevZIndex) => ({
      ...prevZIndex,
      [featureId]: prevZIndex[featureId], // Increment the zIndex
    }));

    // Update model state based on selected feature
    const selectedFeature = featureConfig.find((feature) => feature.id === featureId);
    if (selectedFeature) {
      setModelState({
        targetRotation: selectedFeature.rotation,
        targetPosition: selectedFeature.position,
      });
    }
  };

  return (
    <>
      {/* <MousePositionDisplay /> */}
      <GlobalCanvas>
        <ModelRenderer
          targetRotation={modelState.targetRotation}
          targetPosition={modelState.targetPosition}
        />
      </GlobalCanvas>

      {featureConfig.map((feature, index) => (
        <div
          key={index}
          style={{
            position: 'relative', // Change to relative to allow normal flow and zIndex control
            zIndex: zIndexState[feature.id], // Apply dynamic zIndex
          }}
        >
          <FeatureContainer
            id={feature.id}
            label={feature.label}
            onEnter={() => handleFeatureEnter(feature.id)} // Trigger zIndex increase and model state update
          />
        </div>
      ))}
    </>
  );
};

export default App;

### **Introduction**

Artificial Neural Networks (ANNs) are computational models inspired by the structure and functionality of the human brain. These networks have gained significant attention and popularity due to their ability to learn patterns from data and make predictions. ANNs are widely used in various fields, including computer vision, natural language processing, robotics, finance, and more.

The architecture of a neural network refers to its overall structure and organization, including the arrangement of its layers and the number of nodes in each layer. The network architecture plays a crucial role in determining the network's capacity to learn complex patterns and make accurate predictions.

A typical neural network consists of three main types of layers : the input layer, hidden layer(s), and the output layer.

<center>  
<img style="mix-blend-mode: darken;" src="images\ann.png" alt="The architecture of an artificial neural network">
<figcaption><strong>Fig. 1 The architecture of an artificial neural network</strong></figcaption>
</center>

#### **Artificial neurons vs Biological neurons**

The concept of artificial neural networks comes from biological neurons found in human brains, so they share a lot of similarities in structure and function. The structure of artificial neural networks is inspired by biological neurons. A biological neuron has a cell body or soma to process the impulses, dendrites to receive them, and an axon that transfers them to other neurons. The input nodes of artificial neural networks receive input signals, the hidden layer nodes compute these input signals, and the output layer nodes compute the final output by processing the hidden layer’s results using activation functions.

<center>  
<img style="mix-blend-mode: darken;" src="images\node.png" alt=" Biological neurons to Artificial neurons" width="65%">
<figcaption><strong>Fig. 2 Biological neurons to Artificial neurons</strong></figcaption>
</center>


### **Main components of ANN:**

1. **Input Layer:**

The input layer is the initial layer of a neural network and serves as the entry point for external data. This layer receives the raw information or features from the dataset and passes them through to the subsequent layers for processing. Key characteristics of the input layer are:

<ul type="disc">
<li><b>Nodes/Neurons :</b> Each node in the input layer represents a feature or attribute from the input data. For instance, in an image recognition task, each node might correspond to a pixel in the image, or in natural language processing, each node could represent a word in a sentence.</li>
<li><b>No Computation :</b> The input layer does not perform any computation. Its primary function is to transmit the raw input data to the network.</li>
<li><b>Dimensionality :</b> The number of nodes in the input layer is determined by the dimensionality of the input data. If the input is an image with dimensions of 32x32 pixels, the input layer would have 32*32 = 1024 nodes.</li>
<li><b>Normalization :</b> Sometimes, preprocessing steps like normalization are applied at the input layer to ensure that the input data is standardized, making it easier for the neural network to learn.</li>
</ul>

2. **Hidden Layer:**

The hidden layer in a neural network is an intermediate layer situated between the input layer and the output layer. The hidden layer(s) processes the information from the input and contributes to the network's ability to learn and generalize. Here are some key points about hidden layers:
<ul type="disc">
<li><b>Nodes/Neurons :</b> Each node in a hidden layer represents a learned feature or abstraction derived from the input data. The number of nodes in a hidden layer is a parameter that can be adjusted based on the complexity of the task and the characteristics of the data.</li>
<li><b>Computation :</b> The nodes in a hidden layer perform computations. Each node receives input from the nodes in the previous layer (either the input layer or another hidden layer), applies a weighted sum, and passes the result through an activation function. This introduces non-linearity to the network, allowing it to learn complex relationships in the data.</li>
<li><b>Activation Functions :</b> Activation functions, such as sigmoid, tanh, or rectified linear unit (ReLU), are applied to the output of each node in the hidden layer. These functions determine whether a neuron should be activated or not based on the weighted sum of its inputs. These functions introduce non-linearities, enabling the neural network to model more complex relationships in the data.</li>
<li><b>Feature Learning :</b> The hidden layers are crucial for feature learning and abstraction. As the network undergoes training, the weights of connections between nodes are adjusted to capture relevant patterns and relationships in the input data. The hidden layers act as hierarchical feature extractors, learning increasingly abstract representations of the input.</li>
<li><b>Depth and Width :</b> The depth and width of the hidden layers impact the network's capacity to learn and generalize. A deeper network with more hidden layers can potentially capture more complex features, while increasing the width (number of nodes) in a layer can provide more representational power.</li>
</ul>

3. **Output Layer:**

The output layer is the final layer in a neural network, responsible for producing the network's predictions or outputs based on the information processed through the preceding layers. The structure and function of the output layer depend on the nature of the task the neural network is designed to solve, and it is often tailored to match the specific requirements of that task. Here are key aspects of the output layer:

<ul type="disc">
<li><b>Nodes/Neurons :</b> The number of nodes in the output layer corresponds to the number of classes or dimensions in the target variable for the given task. For instance, in a binary classification task, there may be one output node for each class (e.g., class 0 and class 1). In a multiclass classification task, there would be as many nodes as there are classes.</li>
<li><b>Computation :</b> Each node in the output layer performs computations based on the information received from the nodes in the preceding layer (usually the last hidden layer). The computations typically involve weighted sums of inputs, and the result is often passed through an activation function. The choice of activation function in the output layer depends on the nature of the task.</li>
<li><b>Activation Functions :</b> The choice of activation function in the output layer is task-specific. For binary classification, a sigmoid activation function is commonly used, producing a probability-like output and for multiclass classification, a softmax activation function is often employed. It converts the raw output scores into probability distributions across multiple classes, ensuring that the sum of probabilities equals 1.</li>
<li><b>Loss Function :</b> It quantifies the difference between the predicted output of the network and the actual target values. The goal during training is to minimize this loss, as doing so leads to a more accurate and effective neural network. The choice of the loss function is tied to the task and the activation function in the output layer.</li>

Loss functions are classified into two classes based on the type of learning task:
<ul type="circle">
<li><b>Regression Models :</b> predict continuous values.<br>
<ol>
<li>Mean Squared Error (MSE)</li>
<b>MSE = (1/n) * Σ(yᵢ - ȳᵢ)²</b>
<li>Mean Absolute Error (MAE)</li>
<b>MAE = (1/n) * Σ|yᵢ - ȳᵢ|</b>
<li>Mean Bias Error (MBE)</li>
<b>MBE = (1/n) * Σ(yᵢ - ȳᵢ)</b>
</ol>
</li>
<li><b>Classification Models :</b> predict the output from a set of finite categorical values.<br>
<ol>
<li>
Cross-Entropy Loss<br>
<b>Cross-Entropy Loss = -[yᵢ * log(ȳᵢ) + (1 - yᵢ) * log(1 - ȳᵢ)]</b><br>
where,<br>
i - i<sup>th</sup> training sample in a dataset,<br>
n - number of training samples,<br>
yᵢ - Actual output of ith training sample,<br>
ȳᵢ - Predicted value of ith training sample.<br>
</li>
</li>
</ol>
</ul>
<li><b>Interpretation of Output :</b> The output layer's values or probabilities represent the network's prediction for each class. During training, the network adjusts its weights to minimize the difference between these predictions and the actual target values.</li>
</ul>

4. **Weight:**

<ul type="disc">
<li>Neural network weights are numerical values representing connection strength between nodes. They determine the impact of one node's output on another.</li>
<li>The goal is to find weights minimizing the difference between predicted and actual outputs.</li>
<li>The learning rate, affecting model convergence, determines the step size of weight updates.</li>
<li>Weights can be positive or negative, indicating whether a connection has a positive or negative impact on the receiving node's activation.</li>
<li>Larger weights amplify influence, while smaller weights attenuate it. Adjusting weights allows the network to assign varying importance levels to information, facilitating learning and pattern adaptation.</li>
</ul>

<center>  
<img style="mix-blend-mode: darken;" src="images\biasandweights.png" alt="Neural network illustration highlighting the weights and bias" width="55%">
<figcaption><strong>Fig. 3 Neural network illustration highlighting the weights and bias</strong></figcaption>
</center>

5. **Bias:**
<ul type="disc">
<li>Biases are constant values associated with each node in a neural network, including the input, hidden, and output nodes. Bias nodes introduce a level of flexibility and enable the network to learn and adapt to different situations.</li>
<li>Each bias node has its own associated bias value, which is conceptually similar to a weight. However, unlike weights, biases do not depend on any input; they provide a constant value that is added to the weighted sum of inputs of a node.</li>
<li>By adjusting the biases, the network can be fine-tuned to better fit the training data and generalize well to unseen data. Like weights, biases are updated during the training process to minimize the difference between predicted and actual outputs, making the network more accurate and robust.</li>
</ul>

6. **Activation function:**

Activation functions aid neural networks in tackling complex tasks, like distinguishing between cats and dogs, by enabling them to grasp non-linear concepts. Neurons use activation functions to decide whether to activate based on weighted input sums. If the sum exceeds a threshold, the neuron activates, passing output to the next layer. The main role of activation functions is to introduce non-linearity, crucial for the network to learn intricate patterns, as without them, the network would behave linearly.

<center>  
<img style="mix-blend-mode: darken;" src="images\ActivationFunction.png" alt=" Mathematical Model" width="45%">
<figcaption><strong>Fig. 4   Mathematical Model</strong></figcaption><br>
</center>

Common Activation Functions are:

<ul>
<li>
<b>Linear Activation:</b> This is the simplest type. It just scales the input by a certain factor. Imagine it like stretching or compressing a spring. However, it's rarely used in deep learning because it doesn't add much complexity. Formula for linear activation is:

<center>  
<img style="mix-blend-mode: darken;" src="images\linear.png" alt=" Biological neurons to Artificial neurons" width="90">
</center>
</li>
<li>
<b>Step Activation:</b> It's like a light switch. If the input is above a certain threshold, the neuron fires and gives an output of 1. Otherwise, it's inactive with an output of 0. It's not used very often either, as it's quite limited in what it can represent. Formula for Step activation is:

<center>  
<img style="mix-blend-mode: darken;" src="images\step.png" alt=" Biological neurons to Artificial neurons" width="180">
</center>
</li>
<li>
<b>ReLU (Rectified Linear Unit) Activation:</b> This is like turning on a light switch if the input is positive, otherwise, it's off. It's very popular because it helps the network learn complex patterns effectively and quickly. Formula for ReLU activation is:

<center>  
<img style="mix-blend-mode: darken;" src="images\rehu.png" alt=" Biological neurons to Artificial neurons" width="140">
</center>
</li>
<li>
<b>TanH (Hyperbolic Tangent) Activation:</b> Similar to the sigmoid, but it squashes inputs to a range between -1 and 1. It's useful when you want to allow negative values in the output. Formula for TanH activation is:

<center>  
<img style="mix-blend-mode: darken;" src="images\tanh.png" alt=" Biological neurons to Artificial neurons" width="150">
</center>
</li>
<li>
<b>Sigmoid Activation Function:</b> It is commonly used as an activation function in artificial neural networks, particularly in feedforward neural networks. This is because it allows the network to introduce non-linearity into the model, which allows the neural network to learn more complex decision boundaries. Formula for Sigmoid activation is:

<center>  
<img style="mix-blend-mode: darken;" src="images\sigmoid.png" alt=" Biological neurons to Artificial neurons" width="150">
</center>
</li>
</ol>

#### **Common Activation Functions**

Activation functions introduce non-linearity to neural networks. They help the network learn complex mappings between inputs and outputs.

<table align="center" border="2" cellpadding="10" cellspacing="15"  style=" border-spacing: 10px; width: 80%;">
            <caption style="text-align:center; font-weight:bold; color:black;">
                Table: Common Activation Functions
            </caption>
            <tr style="background-color:#f2f2f2; font-weight:bold;">
              <th>S.No.</th>
              <th>Activation Function</th>
              <th>Mathematical Formula</th>
              <th>Output Range</th>   
            </tr>
<tr>
              <td>1</td>
              <td><b>Linear (Identity)</b></td>
              <td>f(x) = x</td>
              <td>(−∞, ∞)</td>            
            </tr>

<tr>
              <td>2</td>
              <td><b>Step Function</b></td>
              <td>
                f(x) =
                { 1, if x ≥ 0;
                0, if x &lt; 0 }
              </td>
              <td>{0, 1}</td>     
            </tr>

<tr>
              <td>3</td>
              <td><b>Sigmoid</b></td>
              <td>
                f(x) = 1 / (1 + e<sup>−x</sup>)
              </td>
              <td>(0, 1)</td>          
            </tr>

<tr>
              <td>4</td>
              <td><b>Hyperbolic Tangent (Tanh)</b></td>
              <td>
                f(x) = (e<sup>x</sup> − e<sup>−x</sup>) / (e<sup>x</sup> + e<sup>−x</sup>)
              </td>
              <td>(−1, 1)</td>    
            </tr>

<tr>
              <td>5</td>
              <td><b>ReLU (Rectified Linear Unit)</b></td>
              <td>f(x) = max(0, x)</td>
              <td>[0, ∞)</td> 
            </tr>

<tr>
              <td>6</td>
              <td><b>Leaky ReLU</b></td>
              <td>
                f(x) = { x, if x &gt; 0; 0.01x, if x ≤ 0 }
              </td>
              <td>(−∞, ∞)</td>   
            </tr>

<tr>
              <td>7</td>
              <td><b>Softmax</b></td>
              <td>
                f(x<sub>i</sub>) = e<sup>x<sub>i</sub></sup> / Σ e<sup>x<sub>j</sub></sup>
              </td>
              <td>(0, 1) &nbsp; (Σ = 1)</td>             
            </tr>

<tr>
              <td>8</td>
              <td><b>Swish</b></td>
              <td>
                f(x) = x / (1 + e<sup>−x</sup>)
              </td>
              <td>(−∞, ∞)</td>  
            </tr>

<tr>
              <td>9</td>
              <td><b>GELU</b></td>
              <td>
                f(x) = x × Φ(x)
              </td>
              <td>(−∞, ∞)</td>   
            </tr>
</table>
          <br>

These function can significantly impact the network's training, convergence, and generalization capabilities. The appropriate function should be chosen based on the specific characteristics of your data and problem domain.

#### **Types of Neural Networks:**
<ul type="disc">

<li><b>Feedforward Neural Networks (FNN):</b> FNNs are the simplest form of ANNs, where information flows in one direction—from the input layer to the output layer. They are effective for tasks like image and speech recognition.</li>
<li><b>Recurrent Neural Networks (RNN):</b> Unlike FNNs, RNNs have connections that form cycles, allowing them to retain information over time. This makes them suitable for sequential data processing, such as in natural language understanding and time-series analysis.</li>

<center>  
<img style="mix-blend-mode: darken;" src="images\RNN-vs-FNN.png" alt="Recurrent Vs Feedforward networks">
<figcaption><strong>Fig. 5 Recurrent Vs Feedforward networks</strong></figcaption><br>
</center>

<li><b>Convolutional Neural Networks (CNNs):</b> CNNs excel in tasks related to image recognition and computer vision. They leverage convolutional layers to automatically learn spatial hierarchies of features.</li>
</ul>

<center>  
<img style="mix-blend-mode: darken;" src="images\cnn.png" alt="Convolutional Neural Network">
<figcaption><strong>Fig. 6 Convolutional Neural Network</strong></figcaption><br>
</center>


**Advantages of Artificial Neural Networks:**
<ul type="disc">
<li><b>Non-linearity :</b> ANNs can model complex, non-linear relationships between inputs and outputs, making them suitable for tasks that involve intricate patterns and data relationships.</li>
<li><b>Adaptability and Generalization :</b> ANNs can adapt and learn from data, enabling them to generalize patterns and make predictions on new, unseen data.</li>
<li><b>Parallel Processing :</b> ANNs can process multiple inputs simultaneously, leveraging parallel computing capabilities and speeding up computation for certain tasks.</li>
<li><b>Feature Learning :</b> ANNs can automatically learn relevant features from the input data, reducing the need for manual feature engineering, which can be time-consuming and error-prone.</li>
<li><b>Highly Expressive :</b> Deep Neural Networks, a type of ANN, can learn hierarchical representations of data, allowing them to handle complex tasks like image and speech recognition.</li>
<li><b>Wide Applicability :</b> ANNs have found applications in various domains, such as computer vision, natural language processing, speech recognition, recommendation systems, and more.</li>
</ul>
<br>

**Disadvantages of Artificial Neural Networks:**
<ul type="disc">
<li><b>Black Box Nature :</b> ANNs can be challenging to interpret, especially deep neural networks. Understanding how and why they arrive at specific conclusions can be difficult, leading to potential trust and transparency issues.</li>
<li><b>Large Amount of Data and Computation :</b> Training ANNs typically requires a large amount of labeled data and substantial computational power. Deep architectures can be computationally intensive and time-consuming to train.</li>
<li><b>Overfitting :</b> ANNs can be prone to overfitting, especially when the model is too complex relative to the available data. Overfitting occurs when the model performs well on the training data but poorly on new, unseen data.</li>
<li><b>Hyperparameter Sensitivity :</b> ANNs have many hyperparameters (e.g., learning rate, number of layers, neurons per layer), and tuning these hyperparameters can be a challenging and iterative process.</li>
<li><b>Data Dependency :</b> The performance of ANNs heavily relies on the quality and representativeness of the training data. Biased or noisy data can adversely affect model accuracy.</li> 
<li><b>Lack of Causality :</b> ANNs often excel at pattern recognition but might not provide insights into causal relationships between variables, making them less suitable for certain scientific or causal inference tasks.</li>
</ol>


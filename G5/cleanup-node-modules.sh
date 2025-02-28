#!/bin/bash

# Check if class number is provided
if [ -z "$1" ]; then
    echo "Please provide a class number (e.g., 01, 02, etc.)"
    echo "Usage: ./cleanup-node-modules.sh <class-number>"
    exit 1
fi

CLASS_NUMBER=$1

# Validate that the input is a two-digit number
if ! [[ $CLASS_NUMBER =~ ^[0-9]{2}$ ]]; then
    echo "Error: Please provide a two-digit number (e.g., 01, 02, etc.)"
    exit 1
fi

echo "Starting cleanup of node_modules folders (excluding Class_${CLASS_NUMBER}*)"
echo "Searching for node_modules folders..."

# Find all node_modules directories
while IFS= read -r dir; do
    # Check if the directory path contains "Class_${CLASS_NUMBER}"
    if [[ $dir == *"Class_${CLASS_NUMBER}"* ]]; then
        echo "Skipping: $dir (matches Class_${CLASS_NUMBER})"
    else
        echo "Deleting: $dir"
        rm -rf "$dir"
    fi
done < <(find . -type d -name "node_modules")

echo "Cleanup completed!"
echo "All node_modules folders have been deleted except those in Class_${CLASS_NUMBER}* directories." 
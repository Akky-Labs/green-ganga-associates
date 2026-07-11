import os
import subprocess

def optimize_image(filepath):
    size_bytes = os.path.getsize(filepath)
    size_kb = size_bytes / 1024
    
    # Skip files smaller than 150 KB unless they are giant team avatars
    filename = os.path.basename(filepath)
    is_avatar = "images" in filepath and filename in ["pp-singh.png", "adityasharma.jpeg", "seema-sharma.jpeg", "nishakumari.jpeg", "ajaysharma.jpeg"]
    
    if size_kb < 150 and not is_avatar:
        return
        
    print(f"Processing: {filepath} ({size_kb:.2f} KB)")
    
    ext = os.path.splitext(filepath)[1].lower()
    
    # 1. Handle team avatars (max 400px width/height)
    if is_avatar:
        print(f"-> Resampling avatar to 400px max dimension")
        subprocess.run(["sips", "-Z", "400", filepath], check=True)
        if ext in [".jpg", ".jpeg"]:
            subprocess.run(["sips", "-s", "formatOptions", "80", filepath], check=True)
            
    # 2. Handle large images (max 1600px width/height)
    else:
        print(f"-> Resampling to 1600px max dimension")
        subprocess.run(["sips", "-Z", "1600", filepath], check=True)
        if ext in [".jpg", ".jpeg"]:
            print(f"-> Applying 80% JPEG compression")
            subprocess.run(["sips", "-s", "formatOptions", "80", filepath], check=True)
            
    new_size_kb = os.path.getsize(filepath) / 1024
    savings = size_kb - new_size_kb
    print(f"-> Optimized: {new_size_kb:.2f} KB (Saved {savings:.2f} KB / {savings/size_kb*100:.1f}%)")

def main():
    public_dir = "/Users/akky/Desktop/Client Projects/green-ganga/public"
    supported_exts = [".jpg", ".jpeg", ".png"]
    
    for root, dirs, files in os.walk(public_dir):
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext in supported_exts:
                filepath = os.path.join(root, f)
                try:
                    optimize_image(filepath)
                except Exception as e:
                    print(f"Failed to optimize {filepath}: {e}")

if __name__ == "__main__":
    main()
